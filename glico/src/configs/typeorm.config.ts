/* eslint-disable prettier/prettier */
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
export const typeORMconfig: TypeOrmModuleOptions = {
    type: "postgres",
    host: "portfolio.c7cjz0ldrvbi.ap-northeast-2.rds.amazonaws.com",
    port: 5432,
    username: "doremi",
    password: "plani1226!",
    database: "postgres",
    entities: [__dirname + '/../**/*.entity.{js.ts}'],
    /* synchronize: true는 production 모드에서 false로 (데이터 잃을 수 있음) */
    synchronize: true,
    ssl: true,
    extra: {
        ssl: {
            rejectUnauthorized: false
        },
    },
}