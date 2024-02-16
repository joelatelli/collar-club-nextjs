import { BaseRouter } from "../shared";
import { ProfileController } from "./controllers";

export class ProfileRouter extends BaseRouter<ProfileController> {
  constructor() {
    super(ProfileController);
  }

  routes(): void {
    this.router.get("/products", (req, res) =>
      this.controller.getProfiles(req, res)
    );
    this.router.get("/product/:id", (req, res) =>
      this.controller.getProfileById(req, res)
    );
    this.router.post("/create-product", (req, res) =>
      this.controller.createProfile(req, res)
    );
    this.router.put("/update-product/:id", (req, res) =>
      this.controller.updateProfile(req, res)
    );
    this.router.delete("/delete-product/:id", (req, res) =>
      this.controller.deleteProfile(req, res)
    );
  }
}
