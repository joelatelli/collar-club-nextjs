import { Request, Response } from "express";
import { CustomerService } from "../services";
import jwt from 'jsonwebtoken'

export class CustomerController {
  constructor(
    private readonly customerService: CustomerService = new CustomerService()
  ) {}

  async getCustomers(req: Request, res: Response) {
    try {
      const data = await this.customerService.findAllCustomers();
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }

  async getCustomerById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.customerService.findCustomerById(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }

  async createCustomer(req: Request, res: Response) {
    try {
      const data = await this.customerService.createCustomer(req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }

  async updateCustomer(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.customerService.updateCustomer(id, req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }

  async deleteCustomer(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.customerService.deleteCustomer(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }

  async getCustomerByToken(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.customerService.findCustomerByToken(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }

  async login(req: Request, res: Response) {
    try {
      const data = await this.customerService.login(req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
}
