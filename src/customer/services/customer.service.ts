import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../libs";
import { TokenService } from "./token.service";
import { MailService } from "./mail.service";
import { CustomerDTO } from "../dto";
import { CustomerEntity } from "../entities";
import { TokenEntity } from "../entities";


export class CustomerService extends BaseService<CustomerEntity> {
  constructor(
    readonly tokenService: TokenService = new TokenService(),
    readonly mailService: MailService = new MailService()
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
  //   const repository = await this.execRepository;

  //   const customer = await this.findCustomerByEmail(body.email);

  //   if (!customer) {
  //     throw new Error("There is an account using this email already.");
  //   }

  //   const hashPassword = await bcrypt.hash(body.password, 3);

  //   const activationLink = uuidv4();

  //   const user = repository.create({
  //     username: body.username,
  //     firstName: body.firstName,
  //     lastName: body.lastName,
  //     email: body.email,
  //     password: hashPassword,
  //     isVerified: false,
  //     activationLink: activationLink,
  //   });

  //   // await this.mailService.sendActivationMail(body.email, `${process.env.DATABASE_URL}/activate/:${activationLink}`);

  //   const tokens = await this.tokenService.createToken(body);
  //   await this.tokenService.saveToken(user.id, tokens.refreshToken);

  //   (await this.execRepository).save(user);

  //   return tokens
  }

  async login(body: CustomerDTO): Promise<CustomerEntity> {
    return (await this.execRepository).save(body);
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
}
