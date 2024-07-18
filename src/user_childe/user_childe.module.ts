import { Module } from '@nestjs/common';
import { UserChildeController } from './user_childe.controller';
import { UserChildeService } from './user_childe.service';

@Module({
  controllers: [UserChildeController],
  providers: [UserChildeService]
})
export class UserChildeModule {}
