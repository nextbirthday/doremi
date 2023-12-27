/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { Board } from 'src/boards/board.entity';

dotenv.config();
export const typeORMconfig: TypeOrmModuleOptions = {

  type: 'postgres',
  host: process.env.DATABASE_URL,
  port: 5432,
  username: process.env.DATABASE_USER_NAME,
  password: process.env.DATABASE_PASSWORD,
  database: 'postgres',
  schema: process.env.DATABASE_SCHEMA,
  entities: [__dirname + '/../**/*.entity.{js.ts}', Board],
  autoLoadEntities: true,
  /* synchronize: true는 production 모드에서 false로 (데이터 잃을 수 있음) */
  synchronize: true,
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
  
};
