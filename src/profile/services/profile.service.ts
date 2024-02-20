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
  
    const profileToUpdate = await this.findProfileById(id);
    if (!profileToUpdate) {
      throw new Error("Profile not found");
    }
  
    // Update profile entity with values from ProfileDTO
    const updatedFields = {
      name: infoUpdate.name,
      age: infoUpdate.age,
      breed: infoUpdate.breed,
      weight: infoUpdate.weight,
      temperment: infoUpdate.temperment,
      specialNeeds: infoUpdate.specialNeeds,
      lastVaccinated: infoUpdate.lastVaccinated,
      customer: customer,
    };
  
    return (await this.execRepository).update(id, updatedFields);
  }

  async getProfilesByCustomerId(id: string): Promise<ProfileEntity[]> {
    return (await this.execRepository).find({ where: { customer: { id: id } } });
  }
}
