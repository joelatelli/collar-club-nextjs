import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../libs";
import { ProductEntity } from "../entities";
import { ProductDTO } from "../dto";
import { CategoryService } from "../../category";

export class ProductService extends BaseService<ProductEntity> {
  constructor(
    readonly categoryService: CategoryService = new CategoryService()
  ) {
    super(ProductEntity);
  }

  async findAllProducts(): Promise<ProductEntity[]> {
    return (await this.execRepository).find();
  }

  async findProductById(id: string): Promise<ProductEntity | null> {
    return (await this.execRepository).findOne({ where: { id } });
  }

  async createProduct(body: ProductDTO): Promise<ProductEntity | undefined> {
    try {
      return (await this.execRepository).save(body);
    } catch (error) {
      console.error(error);
    }
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
}
