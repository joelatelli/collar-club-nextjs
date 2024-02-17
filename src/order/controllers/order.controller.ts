import { Request, Response } from "express";
import { OrderService } from "../services";

export class OrderController {
  constructor(
    private readonly orderService: OrderService = new OrderService()
  ) {}
  async getOrders(req: Request, res: Response) {
    try {
      const data = await this.orderService.findAllOrders();
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async getOrderById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.orderService.findOrderById(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async createOrder(req: Request, res: Response) {
    try {
      const data = await this.orderService.createOrder(req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async updateOrder(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.orderService.updateOrder(id, req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async deleteOrder(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.orderService.deleteOrder(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
}
