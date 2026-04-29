import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LostItemsService } from './lost-items.service';
import { CreateLostItemDto } from './dto/create-lost-item.dto';
import { UpdateLostItemDto } from './dto/update-lost-item.dto';

@Controller('lost-items')
export class LostItemsController {
  constructor(private readonly lostItemsService: LostItemsService) {}

  // CREATE
  @Post()
  create(@Body() createLostItemDto: CreateLostItemDto) {
    return this.lostItemsService.create(createLostItemDto);
  }

  // GET ALL
  @Get()
  findAll() {
    return this.lostItemsService.findAll();
  }

  // GET ONE
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lostItemsService.findOne(+id);
  }

  // UPDATE (THIS FIXES YOUR PATCH ISSUE)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLostItemDto: UpdateLostItemDto,
  ) {
    return this.lostItemsService.update(+id, updateLostItemDto);
  }

  // DELETE
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lostItemsService.remove(+id);
  }
}
