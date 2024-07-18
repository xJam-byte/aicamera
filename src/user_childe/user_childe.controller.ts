import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserChildeService } from "./user_childe.service";
import { CreateChileDto } from "./Dto/create-chile.dto";

@Controller("user-childe")
export class UserChildeController {
  constructor(private childeService: UserChildeService) {}
  @Get("/all")
  login(@Body() body: any) {
    return this.childeService.getAllOfParent(body);
  }
  @Post("")
  createChilde(@Body() dto: CreateChileDto) {
    return this.childeService.createChile(dto);
  }
}
