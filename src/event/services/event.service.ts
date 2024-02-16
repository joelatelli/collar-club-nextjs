import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../libs";
import { EventEntity } from "../entities";
import { EventDTO } from "../dto";
import { CategoryService } from "../../category";

export class EventService extends BaseService<EventEntity> {
  constructor(
    readonly categoryService: CategoryService = new CategoryService()
  ) {
    super(EventEntity);
  }

  async findAllEvents(): Promise<EventEntity[]> {
    return (await this.execRepository).find();
  }

  async findEventById(id: string): Promise<EventEntity | null> {
    return (await this.execRepository).findOne({ where: { id } });
  }

  async createEvent(body: EventDTO): Promise<EventEntity | undefined> {
    try {
      return (await this.execRepository).save(body);
    } catch (error) {
      console.error(error);
    }
  }

  async deleteEvent(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }

  async updateEvent(
    id: string,
    infoUpdate: EventDTO
  ): Promise<UpdateResult> {
    return (await this.execRepository).update(id, infoUpdate);
  }
}
