import { Controller, Get, UseGuards } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  // Only admin/staff can view reports
  @Get('summary')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'staff')
  getSummary() {
    return this.reportsService.getSummary();
  }
}