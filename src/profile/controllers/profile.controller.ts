import { Request, Response } from "express";
import { ProfileService } from "../services";

export class ProfileController {
  constructor(
    private readonly productService: ProfileService = new ProfileService()
  ) {}

  async getProfiles(req: Request, res: Response) {
    try {
      const data = await this.productService.findAllProfiles();
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }

  async getProfileById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.productService.findProfileById(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }

  async createProfile(req: Request, res: Response) {
    try {
      const data = await this.productService.createProfile(req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }

  async updateProfile(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.productService.updateProfile(id, req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }

  async deleteProfile(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.productService.deleteProfile(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
}
