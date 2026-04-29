import { Injectable, NotFoundException } from '@nestjs/common';
import { LostItemsService } from '../lost-items/lost-items.service';
import { FoundItemsService } from '../found-items/found-items.service';

@Injectable()
export class MatchesService {
  constructor(
    private readonly lostItemsService: LostItemsService,
    private readonly foundItemsService: FoundItemsService,
  ) {}

  async findMatchesForLostItem(lostItemId: number) {
    const lostItem = await this.lostItemsService.findOne(lostItemId);

    if (!lostItem) {
      throw new NotFoundException(`Lost item with ID ${lostItemId} not found`);
    }

    const foundItems = await this.foundItemsService.findAll();

    const lostName = lostItem.itemName?.toLowerCase() || '';
    const lostLocation = lostItem.location?.toLowerCase() || '';

    const matches = foundItems.filter((foundItem) => {
      const foundName = foundItem.itemName?.toLowerCase() || '';
      const foundLocation = foundItem.location?.toLowerCase() || '';

      const sameName =
        foundName.includes(lostName) || lostName.includes(foundName);

      const sameLocation = foundLocation === lostLocation;

      return sameName || sameLocation;
    });

    return {
      lostItem,
      totalMatches: matches.length,
      possibleMatches: matches,
    };
  }
}
