import { Controller, Get, Param } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Get('user/:id')
  getUserNotifications(@Param('id') id: string) {
    return this.notificationsService.getUserNotifications(+id);
  }
}
