import { UserController } from "./controllers";
import { BaseRouter } from "../shared";

export class UserRouter extends BaseRouter<UserController> {
  constructor() {
    super(UserController);
  }

  routes(): void {
    this.router.get("/users", (req, res) => this.controller.getUsers(req, res));
    this.router.get("/user/:id", (req, res) =>
      this.controller.getUserById(req, res)
    );
    this.router.get("/user-relations/:id", (req, res) =>
      this.controller.getUserWithRelationById(req, res)
    );
    this.router.post("/create-user", (req, res) =>
      this.controller.createUser(req, res)
    );
    this.router.put("/update-user", (req, res) =>
      this.controller.updateUser(req, res)
    );
    this.router.delete("/delete-user", (req, res) =>
      this.controller.deleteUser(req, res)
    );
  }
}
