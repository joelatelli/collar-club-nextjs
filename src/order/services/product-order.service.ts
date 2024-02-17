import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../libs";
import { ProductOrderDTO } from "../dto";
import { ProductOrderEntity } from "../entities";
import { ProductService } from "../../product";

export class ProductOrderService extends BaseService<ProductOrderEntity> {
  constructor(
    private readonly productService: ProductService = new ProductService()
  ) {
    super(ProductOrderEntity);
  }

  async findAllPurchaseProducts(): Promise<ProductOrderEntity[]> {
    return (await this.execRepository).find();
  }

  async findPurchaseProductById(
    id: string
  ): Promise<ProductOrderEntity | null> {
    return (await this.execRepository).findOne({ where: { id } });
  }

  async createPurchaseProduct(
    body: ProductOrderDTO
  ): Promise<ProductOrderEntity> {
    const newPurchaseProduct = (await this.execRepository).create(body);

    const product = await this.productService.findProductById(
      newPurchaseProduct.product.id
    );

    newPurchaseProduct.totalPrice =
      product!.price * newPurchaseProduct.quantity;

    return (await this.execRepository).save(newPurchaseProduct);
  }

  async deletePurchaseProduct(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }

  async updatePurchaseProduct(
    id: string,
    infoUpdate: ProductOrderDTO
  ): Promise<UpdateResult> {
    return (await this.execRepository).update(id, infoUpdate);
  }
}
