import { BaseRouter } from "../shared";
import { ProfileController } from "./controllers";

export class ProfileRouter extends BaseRouter<ProfileController> {
  constructor() {
    super(ProfileController);
  }

  routes(): void {
    this.router.get("/profile", (req, res) =>
      this.controller.getProfiles(req, res)
    );
    this.router.get("/profile/:id", (req, res) =>
      this.controller.getProfileById(req, res)
    );
    this.router.post("/create-profile", (req, res) =>
      this.controller.createProfile(req, res)
    );
    this.router.put("/update-profile/:id", (req, res) =>
      this.controller.updateProfile(req, res)
    );
    this.router.delete("/delete-profile/:id", (req, res) =>
      this.controller.deleteProfile(req, res)
    );
  }
}
