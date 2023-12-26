/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Board } from 'src/boards/board.entity';
export const typeORMconfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'portfolio.c7cjz0ldrvbi.ap-northeast-2.rds.amazonaws.com',
  port: 5432,
  username: 'doremi',
  password: 'plani1226!',
  database: 'postgres',
  entities: [__dirname + '/../**/*.entity.{js.ts}', Board],
  /* synchronize: true는 production 모드에서 false로 (데이터 잃을 수 있음) */
  synchronize: true,
  ssl: true,
  extra: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
};
