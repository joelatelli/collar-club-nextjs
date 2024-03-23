import { DeleteResult, UpdateResult } from "typeorm";
import { AppDataSource, BaseService } from "../../libs";
import { OptionCategoryEntity, OptionEntity, ProductEntity } from "../entities";
import { FavoriteEntity } from "../../favorite/entities";
import { OptionCategoryDTO, ProductDTO } from "../dto";
import { FavoriteDTO } from "../../favorite/dto";
import { CategoryService } from "../../category";
import { CustomerService } from "../../customer";

export class ProductService extends BaseService<ProductEntity> {
  constructor(
    readonly categoryService: CategoryService = new CategoryService(),
    readonly customerService: CustomerService = new CustomerService()
  ) {
    super(ProductEntity);
  }

  async findAllProducts(): Promise<ProductEntity[]> {
    return (await this.execRepository).find();
  }

  async findProductById(id: string): Promise<ProductEntity | null> {
    return (await this.execRepository).findOne({ where: { id } });
  }

  async findProductByIdWithAll(id: string): Promise<ProductEntity | null> {
    return (await this.execRepository).findOne({
      where: { id },
      relations: ['options', 'options.options']
    });
  }

  async createProduct(body: ProductDTO): Promise<ProductEntity | undefined> {
    try {
        const id = body.categoryId
      // Fetch the category entity based on the provided category_id

      const category = await this.categoryService.findCategoryById(id);

      if (!category) {
        throw new Error("Category not found");
      }

      // Create a new ProductEntity
      const newProduct = new ProductEntity();
      newProduct.name = body.name;
      newProduct.desc = body.desc;
      newProduct.price = body.price;
      newProduct.imageURL = body.imageURL;
      newProduct.category = category; // Assign the fetched category to the product

      // Save the product
      return (await this.execRepository).save(newProduct);
    } catch (error) {
      console.error(error);
    }
  }

  async createProductOption(body: OptionCategoryDTO): Promise<ProductEntity | null> {
    
    const product = await this.findProductById(body.productId);

    if (!product) {
      throw new Error("Product not found");
    }

    const newOptionCategory = new OptionCategoryEntity();
    newOptionCategory.title = body.title
    newOptionCategory.isOptional = body.isOptional
    newOptionCategory.product = product

    let optionCategory = await AppDataSource.manager.save(newOptionCategory);

    if (body.options && body.options.length > 0) {
      for (const option of body.options) {
        const newOption = new OptionEntity();
        newOption.category = optionCategory
        newOption.price = option.price
        newOption.title = option.title
    
        await AppDataSource.manager.save(newOption);
      }
    }

    return await this.findProductByIdWithAll(body.productId);
  }

  async deleteProduct(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }

  async updateProduct(
    id: string,
    infoUpdate: ProductDTO
  ): Promise<UpdateResult> {
    return (await this.execRepository).update(id, infoUpdate);
  }

//   async addFavorite(body: FavoriteDTO): Promise<FavoriteEntity | undefined> {
//     try {
//       // Find customer and product entities
//       const customer = await this.customerService.findCustomerById(body.customerId);
//       if (!customer) {
//         throw new Error("Customer not found");
//       }

//       const product = await this.findProductById(body.productId);
//       if (!product) {
//         throw new Error("Product not found");
//       }

//       // Create FavoriteEntity instance
//       const favorite = new FavoriteEntity();
//       favorite.customer = customer;
//     //   favorite.customerId = customer.id;
//       favorite.product = product;
//     //   favorite.productId = product.id;

//       // Save favorite entity
//       return (await this.execRepository).save(favorite);
//     } catch (error) {
//       console.error(error);
//     }
//   }

  async addFavorite(body: FavoriteDTO): Promise<FavoriteEntity | undefined> {
    try {
      // Find customer and product entities
      const customer = await this.customerService.findCustomerById(body.customerId);
      if (!customer) {
        throw new Error("Customer not found");
      }
  
      const product = await this.findProductById(body.productId);
      if (!product) {
        throw new Error("Product not found");
      }
  
      // Create FavoriteEntity instance
      const favorite = new FavoriteEntity();
      favorite.customer = customer;
      favorite.product = product;
  
      // Save favorite entity
      return (await this.execRepository).save(favorite);
    } catch (error) {
      console.error(error);
      throw error; // Re-throw the error to handle it at a higher level
    }
  }
}
