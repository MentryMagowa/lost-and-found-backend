import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe } from '@nestjs/common';
import { LostItemsService } from './lost-items.service';
import { CreateLostItemDto } from './dto/create-lost-item.dto';
import { UpdateLostItemDto } from './dto/update-lost-item.dto';

@Controller('lost-items')
export class LostItemsController {
  constructor(private readonly lostItemsService: LostItemsService) {}

  @Post()
  create(@Body() createLostItemDto: CreateLostItemDto) {
    return this.lostItemsService.create(createLostItemDto);
  }

  @Get()
  findAll() {
    return this.lostItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.lostItemsService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateLostItemDto: UpdateLostItemDto,
  ) {
    return this.lostItemsService.update(id, updateLostItemDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.lostItemsService.remove(id);
  }
}