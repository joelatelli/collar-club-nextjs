import { BaseRouter } from "../shared";
import { ProductOrderController } from "./controllers";

export class ProductOrderRouter extends BaseRouter<ProductOrderController> {
  constructor() {
    super(ProductOrderController);
  }

  routes(): void {
    this.router.get("/purchase-products", (req, res) =>
      this.controller.getPurchaseProducts(req, res)
    );
    this.router.get("/purchase-product/:id", (req, res) =>
      this.controller.getPurchaseProductById(req, res)
    );
    this.router.post("/create-purchase-product", (req, res) =>
      this.controller.createPurchaseProduct(req, res)
    );
    this.router.put("/update-purchase-product/:id", (req, res) =>
      this.controller.updatePurchaseProduct(req, res)
    );
    this.router.delete("/delete-purchase-product/:id", (req, res) =>
      this.controller.deletePurchaseProduct(req, res)
    );
  }
}
