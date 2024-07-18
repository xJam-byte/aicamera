import { forwardRef, Module } from "@nestjs/common";
import { UserChildeController } from "./user_childe.controller";
import { UserChildeService } from "./user_childe.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserChild } from "./user_childe.model";
import { UserParentService } from "src/user_parent/user_parent.service";
import { UserParentModule } from "src/user_parent/user_parent.module";

@Module({
  controllers: [UserChildeController],
  providers: [UserChildeService],
  exports: [UserChildeService],
  imports: [
    SequelizeModule.forFeature([UserChild]),
    forwardRef(() => UserParentModule),
  ],
})
export class UserChildeModule {}
