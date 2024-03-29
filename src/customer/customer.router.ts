import { BaseRouter } from "../shared";
import { CustomerController } from "./controllers";

export class CustomerRouter extends BaseRouter<CustomerController> {
  constructor() {
    super(CustomerController);
  }

  routes(): void {
    this.router.get("/customers", (req, res) =>
      this.controller.getCustomers(req, res)
    );
    this.router.get("/customer/:id", (req, res) =>
      this.controller.getCustomerById(req, res)
    );
    this.router.post("/create-customer", (req, res) =>
      this.controller.createCustomer(req, res)
    );
    this.router.put("/update-customer/:id", (req, res) =>
      this.controller.updateCustomer(req, res)
    );
    this.router.delete("/delete-customer/:id", (req, res) =>
      this.controller.deleteCustomer(req, res)
    );
    this.router.get("/auth/:id", (req, res) =>
      this.controller.getCustomerByToken(req, res)
    );
    this.router.post("/login", (req, res) =>
    this.controller.login(req, res)
    );
  }
}
