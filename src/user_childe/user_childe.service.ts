import {
  Body,
  forwardRef,
  Get,
  Inject,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { UserChild } from "./user_childe.model";
import { log } from "console";
import { UserParentService } from "src/user_parent/user_parent.service";
import { CreateChileDto } from "./Dto/create-chile.dto";

@Injectable()
export class UserChildeService {
  constructor(
    @InjectModel(UserChild)
    private readonly childModel: typeof UserChild,
    @Inject(forwardRef(() => UserParentService))
    private readonly parentService: UserParentService
  ) {}
  async getAllOfParent(body: any) {
    const parent = await this.parentService.findOneByEmail(body.email);
    if (!parent) {
      throw new NotFoundException(`Parent with email ${body.email} not found`);
    }
    const children = await this.childModel.findAll({
      where: { parentId: parent.id },
    });
    return children;
  }
  async createChile(dto: CreateChileDto) {
    const childe = await this.childModel.create(dto);
    return childe;
  }
}
