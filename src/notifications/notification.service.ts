import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Notification } from "./notification.model";
import { CreateNotificationDto } from "./Dto/create-notification.dto";
import { log } from "console";
import { NotificationModule } from "./notification.module";
import { UserParentService } from "src/user_parent/user_parent.service";

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(Notification)
    private readonly notificationModel: typeof Notification,
    private readonly userParentService: UserParentService
  ) {}

  async createNotification(dto: CreateNotificationDto) {
    const notification = await this.notificationModel.create(dto);
    log(notification);
    return notification;
  }

  async getAllNotifications() {
    return this.notificationModel.findAll();
  }

  async getNotificationsByParentEmail(email: string): Promise<Notification[]> {
    const parent = await this.userParentService.findOneByEmail(email);
    if (!parent) {
      throw new Error("Parent not found");
    }

    return this.notificationModel.findAll({
      where: { parentId: parent.id },
    });
  }
}
