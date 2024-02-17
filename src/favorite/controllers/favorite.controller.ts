import { Request, Response } from "express";
import { FavoriteService } from "../services";
export class FavoriteController {
  constructor(
    private readonly eventService: FavoriteService = new FavoriteService()
  ) {}

  async getFavorites(req: Request, res: Response) {
    try {
      const data = await this.eventService.findMyFavorites();
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }

  async addFavorite(req: Request, res: Response) {
    try {
      const data = await this.eventService.addFavorite(req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }

  async deleteFavorite(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.eventService.deleteFavorite(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
}
