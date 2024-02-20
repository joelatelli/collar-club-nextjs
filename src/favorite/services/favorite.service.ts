import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../libs";
import { FavoriteEntity } from "../entities";
import { FavoriteDTO } from "../dto";
import { CustomerService } from "../../customer";
import { ProductService } from "../../product";

export class FavoriteService extends BaseService<FavoriteEntity> {
  constructor(
    readonly customerService: CustomerService = new CustomerService(),
    readonly productService: ProductService = new ProductService()
  ) {
    super(FavoriteEntity);
  }

  async findMyFavorites(): Promise<FavoriteEntity[]> {
    return (await this.execRepository).find();
  }

  // async addFavorite(body: FavoriteDTO): Promise<FavoriteEntity | undefined> {
  //   try {
  //     return (await this.execRepository).save(body);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  async addFavorite(body: FavoriteDTO): Promise<FavoriteEntity | undefined> {
    try {
      // Find customer and product entities
      const customer = await this.customerService.findCustomerById(body.customerId);
      if (!customer) {
        throw new Error("Customer not found");
      }

      const product = await this.productService.findProductById(body.productId);
      if (!product) {
        throw new Error("Product not found");
      }

      // Create FavoriteEntity instance
      const favorite = new FavoriteEntity();
      favorite.customer = customer;
      // favorite.customerId = customer.id;
      favorite.product = product;
      // favorite.productId = product.id;

      // Save favorite entity
      return (await this.execRepository).save(favorite);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteFavorite(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }
}
