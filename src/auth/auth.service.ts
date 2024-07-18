import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

import * as bcrypt from "bcrypt";
import { LoginUserDto } from "src/user_parent/Dto/login-user.dto";
import { RegisterUserDto } from "src/user_parent/Dto/register-user.dto";
import { UserParent } from "src/user_parent/user_parent.model";
import { UserParentService } from "src/user_parent/user_parent.service";

@Injectable()
export class AuthService {
  constructor(
    private customerService: UserParentService,
    private jwtService: JwtService
  ) {}
  async login(customerDto: LoginUserDto) {
    const customer = await this.validateCustomer(customerDto);
    return [this.generateToken(customer), customer];
  }

  async registration(customerDto: RegisterUserDto) {
    const candidate = await this.customerService.findOneByEmail(
      customerDto.email
    );

    if (candidate) {
      throw new HttpException(
        "Пользователь с таким email уже существует",
        HttpStatus.BAD_REQUEST
      );
    }

    const hash = await bcrypt.hash(customerDto.password, 5);
    const customer = await this.customerService.createUser({
      ...customerDto,
      password: hash,
    });
    return [this.generateToken(customer), customer];
  }

  private async generateToken(user: UserParent) {
    const payload = { email: user.email, id: user.id };

    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateCustomer(customerDto: LoginUserDto) {
    const customer = await this.customerService.findOneByEmail(
      customerDto.email
    );
    const password = await bcrypt.compare(
      customerDto.password,
      customer.password
    );

    if (customer && password) {
      return customer;
    }
    throw new UnauthorizedException({ messade: "НЕККОРЕКТНО" });
  }
}
