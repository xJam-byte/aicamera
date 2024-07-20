import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserParentModule } from "./user_parent/user_parent.module";
import { UserChildeModule } from "./user_childe/user_childe.module";
import { AuthModule } from "./auth/auth.module";
import { UserParent } from "./user_parent/user_parent.model";
import { UserChild } from "./user_childe/user_childe.model";
import { NotificationModule } from "./notifications/notification.module";

@Module({
  controllers: [],
  exports: [],
  imports: [
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      models: [UserParent, UserChild],
      autoLoadModels: true,
      synchronize: true,
    }),
    UserParentModule,
    UserChildeModule,
    AuthModule,
    NotificationModule,
  ],
})
export class AppModule {}
