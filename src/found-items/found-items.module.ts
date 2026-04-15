import { Module } from '@nestjs/common';
import { FoundItemsService } from './found-items.service';
import { FoundItemsController } from './found-items.controller';

@Module({
  providers: [FoundItemsService],
  controllers: [FoundItemsController]
})
export class FoundItemsModule {}
