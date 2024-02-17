import { BaseRouter } from "../shared";
import { OrderController } from "./controllers";

export class OrderRouter extends BaseRouter<OrderController> {
  constructor() {
    super(OrderController);
  }

  routes(): void {
    this.router.get("/orders", (req, res) =>
      this.controller.getOrders(req, res)
    );
    this.router.get("/order/:id", (req, res) =>
      this.controller.getOrderById(req, res)
    );
    this.router.post("/create-order", (req, res) =>
      this.controller.createOrder(req, res)
    );
    this.router.put("/update-order/:id", (req, res) =>
      this.controller.updateOrder(req, res)
    );
    this.router.delete("/delete-order/:id", (req, res) =>
      this.controller.deleteOrder(req, res)
    );
  }
}
