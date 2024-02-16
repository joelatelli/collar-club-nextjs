import { Request, Response } from "express";
import { OrderService } from "../services";

export class OrderController {
  constructor(
    private readonly orderService: OrderService = new OrderService()
  ) {}
  async getPurchases(req: Request, res: Response) {
    try {
      const data = await this.orderService.findAllPurchases();
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async getPurchaseById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.orderService.findPurchaseById(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async createPurchase(req: Request, res: Response) {
    try {
      const data = await this.orderService.createPurchase(req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async updatePurchase(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.orderService.updatePurchase(id, req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  async deletePurchase(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.orderService.deletePurchase(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
}
