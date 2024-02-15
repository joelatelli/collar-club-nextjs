import { Request, Response } from "express";
import { UserService } from "../services/user.service";
import { HttpResponse } from "../../shared";
import { DeleteResult, UpdateResult } from "typeorm";

export class UserController {
  constructor(
    private readonly userService = new UserService(),
    private readonly httpResponse: HttpResponse = new HttpResponse()
  ) {}

  async getUsers(_req: Request, res: Response) {
    try {
      const data = await this.userService.findAllUser();

      if (data.length === 0) return this.httpResponse.NotFound(res, data);

      return this.httpResponse.OK(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await this.userService.findUserById(id);

      if (!data) return this.httpResponse.NotFound(res, data);

      return this.httpResponse.OK(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }

  async getUserWithRelationById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await this.userService.findUserWithRelation(id);

      if (!data) return this.httpResponse.NotFound(res, data);

      return this.httpResponse.OK(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }

  async createUser(req: Request, res: Response) {
    try {
      const data = await this.userService.createUser(req.body);
      return this.httpResponse.OK(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }

  async updateUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data: UpdateResult = await this.userService.updateUser(
        id,
        req.body
      );

      if (data.affected === 0)
        return this.httpResponse.NotFound(res, "Error al actualizar");

      return this.httpResponse.OK(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }

  async deleteUser(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data: DeleteResult = await this.userService.deleteUser(id);

      if (data.affected === 0)
        return this.httpResponse.NotFound(res, "Error al eliminar");

      return this.httpResponse.OK(res, data);
    } catch (error) {
      return this.httpResponse.Error(res, error);
    }
  }
}
