import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../libs";
import { FavoriteEntity } from "../entities";
import { FavoriteDTO } from "../dto";
import { CategoryService } from "../../category";

export class FavoriteService extends BaseService<FavoriteEntity> {
  constructor(
    readonly categoryService: CategoryService = new CategoryService()
  ) {
    super(FavoriteEntity);
  }

  async findMyFavorites(): Promise<FavoriteEntity[]> {
    return (await this.execRepository).find();
  }

  async addFavorite(body: FavoriteDTO): Promise<FavoriteEntity | undefined> {
    try {
      return (await this.execRepository).save(body);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteFavorite(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }

}
