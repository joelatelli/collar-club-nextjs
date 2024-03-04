import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../libs";
import { TokenService } from "../../token";
import { TokenEntity } from "../../token";
import { MailService } from "./mail.service";
import { CustomerDTO, LoginDTO } from "../dto";
import { CustomerEntity } from "../entities";
import { ProductEntity } from "../../product";
import { OrderEntity } from "../../order";


export class CustomerService extends BaseService<CustomerEntity> {
  constructor(
    readonly tokenService: TokenService = new TokenService()
    // readonly mailService: MailService = new MailService()
  ) {
    super(CustomerEntity);
  }

  async findAllCustomers(): Promise<CustomerEntity[]> {
    return (await this.execRepository).find();
  }

  async findCustomerById(id: string): Promise<CustomerEntity | null> {
    return (await this.execRepository).findOne({ where: { id } });
  }

  async findCustomerByEmail(email: string): Promise<CustomerEntity | null> {
    return (await this.execRepository).findOne({ where: { email } });
  }

  async createCustomer(body: CustomerDTO) {
    const repository = await this.execRepository;

    const customer = await this.findCustomerByEmail(body.email);

    if (customer) {
      throw new Error("There is an account using this email already.");
    }

    const hashPassword = await bcrypt.hash(body.password, 3);

    const activationLink = uuidv4();

    const user = repository.create({
      username: body.username,
      firstName: body.firstName,
      lastName: body.lastName,
      email: body.email,
      password: hashPassword,
      isVerified: false,
      activationLink: activationLink,
    });

    // await this.mailService.sendActivationMail(body.email, `${process.env.DATABASE_URL}/activate/:${activationLink}`);
    
    // const tokens = await this.tokenService.createToken(body);

    const savedUser = (await this.execRepository).save(user);
    const tokens = await this.tokenService.saveToken(await savedUser);

    return tokens
  }

  async login(body: LoginDTO): Promise<string> {
    try {
      const { email, password } = body;
  
      // Find the customer by email
      const customer = await this.findCustomerByEmail(email);
  
      // If no customer found, throw an error
      if (!customer) {
        throw new Error("Invalid email or password");
      }
  
      // Compare the provided password with the hashed password from the database
      const passwordMatch = await bcrypt.compare(password, customer.password);
  
      if (!passwordMatch) {
        throw new Error("Invalid email or password");
      }
  
      // If email and password combination is correct, generate and save token
      const tokens = await this.tokenService.saveToken(customer);
  
      return tokens.accessToken;
    } catch (error) {
      console.error("Login error:", error);
      throw error; // Rethrow the error for proper handling in the calling function
    }
  }

  async deleteCustomer(id: string): Promise<DeleteResult> {
    return (await this.execRepository).delete({ id });
  }

  async updateCustomer(
    id: string,
    infoUpdate: CustomerDTO
  ): Promise<UpdateResult> {
    return (await this.execRepository).update(id, infoUpdate);
  }

  async findCustomersFavoriteProducts(id: string): Promise<ProductEntity[]> {
    const customer = await this.findCustomerById(id);
    if (!customer) {
        throw new Error("Customer not found");
    }
    return customer.favoriteProducts.map(favorite => favorite.product);
  }

  async findCustomersOrders(id: string): Promise<OrderEntity[]> {
    const customer = await this.findCustomerByIdWithOrders(id);
    if (!customer) {
        throw new Error("Customer not found");
    }
    return customer.orders;
  }

  async findCustomerByIdWithProducts(id: string): Promise<CustomerEntity | null> {
    return (await this.execRepository).findOne({ 
        where: { id },
        relations: ["favoriteProducts"] // Specify the relation to be eagerly loaded
    });
  }

  async findCustomerByIdWithOrders(id: string): Promise<CustomerEntity | null> {
    return (await this.execRepository).findOne({ 
        where: { id },
        relations: ["orders"] // Specify the relation to be eagerly loaded
    });
  }

  async findCustomerByToken(id: string): Promise<CustomerEntity | null> {
    return await this.tokenService.findCustomerByAccessToken(id)
  }
}
