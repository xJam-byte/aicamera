import { Body, Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginUserDto } from "src/user_parent/Dto/login-user.dto";
import { RegisterUserDto } from "src/user_parent/Dto/register-user.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/login/customer")
  login(@Body() customerDto: LoginUserDto) {
    return this.authService.login(customerDto);
  }

  @Post("/registration/customer")
  async registration(@Body() customerDto: RegisterUserDto) {
    return this.authService.registration(customerDto);
  }
}
