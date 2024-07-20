import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserParentService } from "./user_parent.service";
import { UserChildeService } from "src/user_childe/user_childe.service";

@Controller("user-parent")
export class UserParentController {
  constructor(
    private userService: UserParentService,
    private childService: UserChildeService
  ) {}

  @Get("/byEmail")
  async registration(@Body() email: string) {
    return this.userService.findOneByEmail(email);
  }

  @Post("/update/contacts")
  updateNameSurnamePhone(@Body() user: any) {
    return this.userService.updateNameSurnamePhone(user);
  }

  @Post("/update/email")
  updateEmail(@Body() user: any) {
    return this.userService.updateEmail(user);
  }

  @Post("/update/password")
  updatePassword(@Body() user: any) {
    return this.userService.updatePassword(user);
  }
}
