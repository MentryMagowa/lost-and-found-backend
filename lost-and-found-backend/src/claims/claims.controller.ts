import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { ClaimsService } from './claims.service';
import { CreateClaimDto } from './create-claim.dto';

@Controller('claims')
export class ClaimsController {
  constructor(private readonly claimsService: ClaimsService) {}

  @Post()
  async create(@Body() createClaimDto: CreateClaimDto) {
    return this.claimsService.create(createClaimDto);
  }

  @Get()
  findAll() {
    return this.claimsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.claimsService.findOne(+id); 
  }
}
