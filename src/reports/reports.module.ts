import { Module } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { ReportsController } from './reports.controller';
import { UsersModule } from '../users/users.module';
import { LostItemsModule } from '../lost-items/lost-items.module';
import { FoundItemsModule } from '../found-items/found-items.module';
import { ClaimsModule } from '../claims/claims.module';

@Module({
  imports: [UsersModule, LostItemsModule, FoundItemsModule, ClaimsModule],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}
