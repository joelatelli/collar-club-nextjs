import { DeleteResult, UpdateResult } from "typeorm";
import { BaseService } from "../../libs";
// import { CustomerDTO } from "../dto";
import { TokenEntity } from "../entities";

export class TokenService extends BaseService<TokenEntity> {
  constructor() {
    super(TokenEntity)
  }
  
  async createToken(body: any): Promise<TokenEntity> {
    return (await this.execRepository).save(body);
  }

  async saveToken(id: string, refreshToken: string): Promise<TokenEntity> {
    const repository = await this.execRepository;
    let tokenData = await repository.findOne({ where: { id: id } });

    if (tokenData) {
      tokenData.refreshToken = refreshToken;
    } else {
      tokenData = repository.create({ id: id, refreshToken });
    }

    return await repository.save(tokenData);
  }
}