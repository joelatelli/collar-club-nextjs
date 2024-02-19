import { Request, Response } from "express";
import { ProfileService } from "../services";

export class ProfileController {
  constructor(
    private readonly profileService: ProfileService = new ProfileService()
  ) {}

  async getProfiles(req: Request, res: Response) {
    try {
      const data = await this.profileService.findAllProfiles();
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }

  async getProfileById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.profileService.findProfileById(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }

  async createProfile(req: Request, res: Response) {
    try {
      const data = await this.profileService.createProfile(req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }

  async updateProfile(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.profileService.updateProfile(id, req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }

  async deleteProfile(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.profileService.deleteProfile(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }

  async getProfilesByCustomerId(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.profileService.getProfilesByCustomerId(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
}
