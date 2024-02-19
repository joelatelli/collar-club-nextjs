import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../libs";
import { ProfileEntity } from "../entities";
import { ProfileDTO } from "../dto";
import { CategoryService } from "../../category";
import { CustomerService } from "../../customer";

export class ProfileService extends BaseService<ProfileEntity> {
  constructor(
    readonly categoryService: CategoryService = new CategoryService(),
    readonly customerService: CustomerService = new CustomerService()

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

    const customer = await this.customerService.findCustomerById(body.customerId);
    if (!customer) {
      throw new Error("Customer not found");
    }

    const profile = new ProfileEntity();
    profile.name = body.name
    profile.age = body.age
    profile. breed = body.breed
    profile.weight = body.weight
    profile.temperment = body.temperment
    profile.specialNeeds = body.specialNeeds
    profile.lastVaccinated = body.lastVaccinated
    profile.customer = customer

    try {
      return (await this.execRepository).save(profile);
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
    
    const customer = await this.customerService.findCustomerById(infoUpdate.customerId);
    if (!customer) {
      throw new Error("Customer not found");
    }

    const profile = new ProfileEntity();
    profile.name = infoUpdate.name
    profile.age = infoUpdate.age
    profile. breed = infoUpdate.breed
    profile.weight = infoUpdate.weight
    profile.temperment = infoUpdate.temperment
    profile.specialNeeds = infoUpdate.specialNeeds
    profile.lastVaccinated = infoUpdate.lastVaccinated
    profile.customer = customer

    // try {
    //   return (await this.execRepository).save(profile);
    // } catch (error) {
    //   console.error(error);
    // }
    return (await this.execRepository).update(id, profile);
  }
}
