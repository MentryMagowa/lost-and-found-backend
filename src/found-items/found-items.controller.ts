import {
  Controller, Get, Post, Body, Patch, Param, Delete,
  HttpCode, HttpStatus, UseInterceptors, UploadedFile
} from '@nestjs/common';
import { FoundItemService } from './found-items.service';
import { CreateFoundItemDto } from './dto/create-found-item.dto';
import { UpdateFoundItemDto } from './dto/update-found-item.dto';
import { fileUploadInterceptor } from './common/interceptors/file-upload.interceptor';

@Controller('found-items')
export class FoundItemController {
  constructor(private readonly foundItemService: FoundItemService) {}

  //JSON (URL image)
  @Post()
  create(@Body() createFoundItemDto: CreateFoundItemDto) {
    return this.foundItemService.create(createFoundItemDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFoundItemDto: UpdateFoundItemDto) {
    return this.foundItemService.update(id, updateFoundItemDto);
  }

  // File upload (gallery image)
  @Post('upload')
  @UseInterceptors(fileUploadInterceptor('image'))
  async createWithFile(
    @Body() createFoundItemDto: CreateFoundItemDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.foundItemService.createWithFile(createFoundItemDto, file);
  }

  @Patch('upload/:id')
  @UseInterceptors(fileUploadInterceptor('image'))
  async updateWithFile(
    @Param('id') id: string,
    @Body() updateFoundItemDto: UpdateFoundItemDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.foundItemService.updateWithFile(id, updateFoundItemDto, file);
  }

  //Common endpoints
  @Get()
  findAll() {
    return this.foundItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foundItemService.findOne(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.foundItemService.remove(+id);
  }
}
