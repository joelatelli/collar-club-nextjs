import { Request, Response } from "express";
import { ProductService } from "../services";

export class ProductController {
  constructor(
    private readonly productService: ProductService = new ProductService()
  ) {}

  async getProducts(req: Request, res: Response) {
    try {
      const data = await this.productService.findAllProducts();
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }

  async getProductById(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.productService.findProductById(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }

  async createProduct(req: Request, res: Response) {
    try {
      const data = await this.productService.createProduct(req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }

  async addProductOption(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const data = await this.productService.createProductOption(req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
  
  async updateProduct(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.productService.updateProduct(id, req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }

  async deleteProduct(req: Request, res: Response) {
    const { id } = req.params;
    try {
      const data = await this.productService.deleteProduct(id);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }

  async favoriteProduct(req: Request, res: Response) {
    try {
      const data = await this.productService.addFavorite(req.body);
      res.status(200).json(data);
    } catch (e) {
      console.error(e);
    }
  }
}
