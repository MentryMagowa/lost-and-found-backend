import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { LostItemsService } from '../lost-items/lost-items.service';
import { FoundItemsService } from '../found-items/found-items.service';
import { ClaimsService } from '../claims/claims.service';

@Injectable()
export class ReportsService {
  constructor(
    private readonly usersService: UsersService,
    private readonly lostItemsService: LostItemsService,
    private readonly foundItemsService: FoundItemsService,
    private readonly claimsService: ClaimsService,
  ) {}

  async getSummary() {
    const users = await this.usersService.findAll();
    const lostItems = await this.lostItemsService.findAll();
    const foundItems = await this.foundItemsService.findAll();
    const claims = await this.claimsService.findAll();

    return {
      totalUsers: users.length,
      totalLostItems: lostItems.length,
      totalFoundItems: foundItems.length,
      totalClaims: claims.length,
      pendingClaims: claims.filter((claim) => claim.status === 'pending').length,
      approvedClaims: claims.filter((claim) => claim.status === 'approved').length,
      rejectedClaims: claims.filter((claim) => claim.status === 'rejected').length,
    };
  }
}
