import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { LostItemsModule } from './lost-items/lost-items.module';
import { FoundItemsModule } from './found-items/found-items.module';
import { ClaimsModule } from './claims/claims.module';
import { MatchesModule } from './matches/matches.module';
import { ReportsModule } from './reports/reports.module';
import { NotificationsModule } from './notifications/notifications.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'oracle',
        host: config.get('DB_HOST'),
        port: parseInt(config.get<string>('DB_PORT') || '1521', 10),
        username: config.get('DB_USERNAME'),
        password: config.get('DB_PASSWORD'),
        serviceName: config.get('DB_SERVICE_NAME'),
        synchronize: config.get('DB_SYNCHRONIZE') === 'true',
        autoLoadEntities: true,
        logging: true,
      }),
    }),
    UsersModule,
    LostItemsModule,
    FoundItemsModule,
    ClaimsModule,
    MatchesModule,
    ReportsModule,
    NotificationsModule,
  ],
})
export class AppModule {}
