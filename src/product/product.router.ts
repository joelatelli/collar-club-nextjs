import { BaseRouter } from "../shared";
import { ProductController } from "./controllers";

export class ProductRouter extends BaseRouter<ProductController> {
  constructor() {
    super(ProductController);
  }

  routes(): void {
    this.router.get("/products", (req, res) =>
      this.controller.getProducts(req, res)
    );
    this.router.get("/product/:id", (req, res) =>
      this.controller.getProductById(req, res)
    );
    this.router.post("/create-product", (req, res) =>
      this.controller.createProduct(req, res)
    );
    this.router.post("/favorite-product", (req, res) =>
      this.controller.favoriteProduct(req, res)
    );
    this.router.post("product/:id/add-option", (req, res) =>
      this.controller.addProductOption(req, res)
    );
    this.router.put("/update-product/:id", (req, res) =>
      this.controller.updateProduct(req, res)
    );
    this.router.delete("/delete-product/:id", (req, res) =>
      this.controller.deleteProduct(req, res)
    );
  }
}
