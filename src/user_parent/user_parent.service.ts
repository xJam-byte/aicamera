import { Injectable, NotFoundException } from "@nestjs/common";
import { UserParent } from "./user_parent.model";
import { InjectModel } from "@nestjs/sequelize";
import { RegisterUserDto } from "./Dto/register-user.dto";
import * as bcrypt from "bcrypt";

@Injectable()
export class UserParentService {
  constructor(
    @InjectModel(UserParent)
    private readonly userModel: typeof UserParent
  ) {}

  async findOneByEmail(email: string): Promise<UserParent> {
    const user = await this.userModel.findOne({ where: { email } });
    return user;
  }

  async getUserById(id: number) {
    const user = await this.userModel.findOne({
      where: { id: id },
      include: { all: true },
    });

    return user;
  }

  async createUser(createCustomerDto: RegisterUserDto): Promise<UserParent> {
    return this.userModel.create(createCustomerDto);
  }

  async updateNameSurnamePhone(user: any) {
    const customer = await this.userModel.findOne({
      where: { email: user.email },
    });

    if (!customer) {
      throw new Error("Клиент с указанным email не найден.");
    }
    const e = await customer.update(
      {
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
      },
      { where: { id: customer.id } }
    );

    await customer.save();
    return customer;
  }

  async updateEmail(user: any) {
    const customer = await this.userModel.findOne({
      where: { email: user.oldEmail },
    });

    if (!customer) {
      throw new Error("Клиент с указанным email не найден.");
    }
    await customer.update(
      {
        email: user.newEmail,
      },
      { where: { id: customer.id } }
    );

    await customer.save();
    return customer;
  }

  async updatePassword(user: any) {
    const customer = await this.userModel.findOne({
      where: { email: user.email },
    });

    if (!customer) {
      throw new Error("Клиент с указанным email не найден.");
    }

    const hash = await bcrypt.hash(user.password, 5);
    await customer.update({ password: hash }, { where: { id: customer.id } });

    await customer.save();
    return customer;
  }
}
