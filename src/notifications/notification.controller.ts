import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { NotificationService } from "./notification.service";
import { CreateNotificationDto } from "./Dto/create-notification.dto";

@Controller("notifications")
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  async create(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationService.createNotification(createNotificationDto);
  }
  @Get("/parent-email/:email")
  async getNotificationsByParentEmail(@Param("email") email: string) {
    return this.notificationService.getNotificationsByParentEmail(email);
  }
  @Get()
  async getAll() {
    return this.notificationService.getAllNotifications();
  }
}
