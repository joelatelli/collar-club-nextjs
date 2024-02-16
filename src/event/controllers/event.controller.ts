import { Request, Response } from "express";
import { EventService } from "../services";
export class EventController {
  constructor(
    private readonly eventService: EventService = new EventService()
  ) {}

  async getEvents(req: Request, res: Response) {
    try {
      const data = await this.eventService.findAllEvents();
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }

  async getEventById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.eventService.findEventById(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }

  async createEvent(req: Request, res: Response) {
    try {
      const data = await this.eventService.createEvent(req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }

  async updateEvent(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.eventService.updateEvent(id, req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }

  async deleteEvent(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.eventService.deleteEvent(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
}
