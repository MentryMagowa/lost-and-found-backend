import { Injectable } from '@nestjs/common';
import { ClaimsService } from '../claims/claims.service';

@Injectable()
export class NotificationsService {
  constructor(private readonly claimsService: ClaimsService) {}

  async getUserNotifications(userId: number) {
    const claims = await this.claimsService.findAll();

    const userClaims = claims.filter((claim) => claim.userId === userId);

    const notifications = userClaims.map((claim) => {
      if (claim.status === 'approved') {
        return {
          message: `Your claim with ID ${claim.id} has been approved.`,
          status: claim.status,
        };
      }

      if (claim.status === 'rejected') {
        return {
          message: `Your claim with ID ${claim.id} has been rejected.`,
          status: claim.status,
        };
      }

      return {
        message: `Your claim with ID ${claim.id} is still pending.`,
        status: claim.status,
      };
    });

    return {
      userId,
      totalNotifications: notifications.length,
      notifications,
    };
  }
}
