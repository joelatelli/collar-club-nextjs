import { BaseRouter } from "../shared";
import { FavoriteController } from "./controllers";

export class EventRouter extends BaseRouter<FavoriteController> {
  constructor() {
    super(FavoriteController);
  }

  routes(): void {
    this.router.get("/:id/favorites", (req, res) =>
      this.controller.getFavorites(req, res)
    );
    this.router.post("/favorite", (req, res) =>
      this.controller.addFavorite(req, res)
    );
    this.router.delete("/delete-favorite/:id", (req, res) =>
      this.controller.deleteFavorite(req, res)
    );
  }
}
