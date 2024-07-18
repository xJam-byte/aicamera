import { forwardRef, Module } from "@nestjs/common";
import { UserParentController } from "./user_parent.controller";
import { UserParentService } from "./user_parent.service";
import { UserParent } from "./user_parent.model";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserChildeModule } from "src/user_childe/user_childe.module";

@Module({
  controllers: [UserParentController],
  providers: [UserParentService],
  exports: [UserParentService],
  imports: [
    SequelizeModule.forFeature([UserParent]),
    forwardRef(() => UserChildeModule),
  ],
})
export class UserParentModule {}
