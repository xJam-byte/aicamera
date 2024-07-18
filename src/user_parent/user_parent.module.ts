import { Module } from "@nestjs/common";
import { UserParentController } from "./user_parent.controller";
import { UserParentService } from "./user_parent.service";
import { UserParent } from "./user_parent.model";
import { SequelizeModule } from "@nestjs/sequelize";

@Module({
  controllers: [UserParentController],
  providers: [UserParentService],
  exports: [UserParentService],
  imports: [SequelizeModule.forFeature([UserParent])],
})
export class UserParentModule {}
