import { Injectable, NotFoundException } from "@nestjs/common";
import { UserParent } from "./user_parent.model";
import { InjectModel } from "@nestjs/sequelize";
import { RegisterUserDto } from "./Dto/register-user.dto";

@Injectable()
export class UserParentService {
  constructor(
    @InjectModel(UserParent)
    private readonly userModel: typeof UserParent
  ) {}

  async findOneByEmail(email: string): Promise<UserParent> {
    const user = await this.userModel.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException(`Parent with email ${email} not found`);
    }
    return user;
  }

  async createUser(createCustomerDto: RegisterUserDto): Promise<UserParent> {
    return this.userModel.create(createCustomerDto);
  }
}
