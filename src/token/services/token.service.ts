import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../libs";
// import { CustomerDTO } from "../dto";
import { TokenEntity } from "../entities";
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from "uuid";
import { CustomerEntity } from "../../customer";

export class TokenService extends BaseService<TokenEntity> {
  constructor() {
    super(TokenEntity)
  }
  
  async createToken(body: any): Promise<TokenEntity> {
    return (await this.execRepository).save(body);
  }

  async saveToken(user: CustomerEntity): Promise<TokenEntity> {
    const repository = await this.execRepository;
    // let tokenData = await repository.findOne({ where: { id: id } });

    // if (tokenData) {
    //   tokenData.refreshToken = refreshToken;
    // } else {
    //   tokenData = repository.create({ id: id, refreshToken });
    // }
    const accessToken = await this.generateAccessToken(user); // Generate access token
    const refreshToken = await this.generateRefreshToken(user); // Generate refresh token

    const tokenEntity = new TokenEntity(); // Create a new instance of TokenEntity
    tokenEntity.accessToken = accessToken;
    tokenEntity.refreshToken = refreshToken;
    tokenEntity.customer = user; // Assign the user/customer

    return await repository.save(tokenEntity);

  }

  // Function to generate access token
  async generateAccessToken(user: CustomerEntity): Promise<string>{
    // return jwt.sign(user, process.env.JWT_SECRET!, { expiresIn: '30d' }); // Change the expiration time according to your requirement

    return jwt.sign(
        { userId: user.id, username: user.username },
        process.env.JWT_SECRET!,
        { expiresIn: "30d" }
      );
  }

    // Function to generate refresh token
    async generateRefreshToken(user: CustomerEntity): Promise<string> {
        return jwt.sign(
            { userId: user.id, username: user.username },
            process.env.JWT_SECRET!
          );
    }

    async findCustomerByAccessToken(accessToken: string): Promise<CustomerEntity | null> {
        const repository = await this.execRepository;
        const token = await repository.findOne({ where: { accessToken }, relations: ["customer"] });
        return token ? token.customer : null;
      }
    
}
