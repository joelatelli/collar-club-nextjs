import { BaseRouter } from "../shared";
import { EventController } from "./controllers";

export class EventRouter extends BaseRouter<EventController> {
  constructor() {
    super(EventController);
  }

  routes(): void {
    this.router.get("/events", (req, res) =>
      this.controller.getEvents(req, res)
    );
    this.router.get("/event/:id", (req, res) =>
      this.controller.getEventById(req, res)
    );
    this.router.post("/create-event", (req, res) =>
      this.controller.createEvent(req, res)
    );
    this.router.put("/update-event/:id", (req, res) =>
      this.controller.updateEvent(req, res)
    );
    this.router.delete("/delete-event/:id", (req, res) =>
      this.controller.deleteEvent(req, res)
    );
  }
}
