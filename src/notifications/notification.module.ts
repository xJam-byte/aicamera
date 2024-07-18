import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserParentModule } from "src/user_parent/user_parent.module";
import { NotificationService } from "./notification.service";
import { NotificationController } from "./notification.controller";
import { Notification } from "./notification.model";

@Module({
  imports: [SequelizeModule.forFeature([Notification]), UserParentModule],
  providers: [NotificationService],
  controllers: [NotificationController],
})
export class NotificationModule {}
