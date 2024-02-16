import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../libs";
import { ProfileEntity } from "../entities";
import { ProfileDTO } from "../dto";
import { CategoryService } from "../../category";

export class ProfileService extends BaseService<ProfileEntity> {
  constructor(
    readonly categoryService: CategoryService = new CategoryService()
  ) {
    super(ProfileEntity);
  }

  async findAllProfiles(): Promise<ProfileEntity[]> {
    return (await this.execRepository).find();
  }

  async findProfileById(id: string): Promise<ProfileEntity | null> {
    return (await this.execRepository).findOne({ where: { id } });
  }

  async createProfile(body: ProfileDTO): Promise<ProfileEntity | undefined> {
    try {
      return (await this.execRepository).save(body);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteProfile(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }

  async updateProfile(
    id: string,
    infoUpdate: ProfileDTO
  ): Promise<UpdateResult> {
    return (await this.execRepository).update(id, infoUpdate);
  }
}
