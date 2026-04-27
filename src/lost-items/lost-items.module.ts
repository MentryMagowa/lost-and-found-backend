import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { LostItem } from './lost-item.entity';
import { LostItemsService } from './lost-items.service';
import { LostItemsController } from './lost-items.controller';

@Module({
  //imports: [TypeOrmModule.forFeature([LostItem])],
  controllers: [LostItemsController],
  providers: [LostItemsService],
  exports: [LostItemsService],
})
export class LostItemsModule {}