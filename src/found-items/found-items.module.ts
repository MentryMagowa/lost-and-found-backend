import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FoundItemService } from './found-items.service';
import { FoundItemController } from './found-items.controller';
import { FoundItem } from './entities/found-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FoundItem])],
  controllers: [FoundItemController],
  providers: [FoundItemService],
  exports: [FoundItemService],
})
export class FoundItemModule {}
