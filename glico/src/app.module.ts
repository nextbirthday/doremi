/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './boards/boards.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { typeORMconfig } from './configs/typeorm.config';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(typeORMconfig),
    BoardsModule,
    AuthModule,
    UserModule,
  ],
})
export class AppModule { }
