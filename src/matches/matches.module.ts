import { Module } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { MatchesController } from './matches.controller';
import { LostItemsModule } from '../lost-items/lost-items.module';
import { FoundItemsModule } from '../found-items/found-items.module';

@Module({
  imports: [LostItemsModule, FoundItemsModule],
  controllers: [MatchesController],
  providers: [MatchesService],
})
export class MatchesModule {}
