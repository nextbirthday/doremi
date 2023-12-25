import { Module } from '@nestjs/common';
import { BoardsModule } from './boards/boards.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [BoardsModule, AuthModule, UserModule],
})
export class AppModule {}
