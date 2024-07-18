import { Body, Controller, Get } from "@nestjs/common";
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
}
