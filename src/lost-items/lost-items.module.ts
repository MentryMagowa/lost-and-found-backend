import { Module } from '@nestjs/common';
import { LostItemsService } from './lost-items.service';
import { LostItemsController } from './lost-items.controller';

@Module({
  providers: [LostItemsService],
  controllers: [LostItemsController]
})
export class LostItemsModule {}
