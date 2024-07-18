import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { UserParentModule } from "./user_parent/user_parent.module";
import { UserChildeModule } from "./user_childe/user_childe.module";
import { AuthModule } from "./auth/auth.module";
import { UserParent } from "./user_parent/user_parent.model";
import { UserChild } from "./user_childe/user_childe.model";

@Module({
  controllers: [],
  exports: [],
  imports: [
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "root",
      database: "aicamera",
      models: [UserParent, UserChild],
      autoLoadModels: true,
      synchronize: true,
    }),
    UserParentModule,
    UserChildeModule,
    AuthModule,
  ],
})
export class AppModule {}
