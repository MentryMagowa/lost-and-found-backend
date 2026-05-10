import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { FoundItemsService } from './found-items.service';
import { CreateFoundItemDto } from './dto/create-found-item.dto';
import { UpdateFoundItemDto } from './dto/update-found-item.dto';

@Controller('found-items')
export class FoundItemsController {
  constructor(private readonly foundItemsService: FoundItemsService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('photo', {
      storage: diskStorage({
        destination: './uploads/found-items',
        filename: (req, file, callback) => {
          const uniqueName =
            Date.now() + '-' + Math.round(Math.random() * 1e9);

          callback(null, uniqueName + extname(file.originalname));
        },
      }),
    }),
  )
  create(
    @Body() createFoundItemDto: CreateFoundItemDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const imageUrl = file
      ? `/uploads/found-items/${file.filename}`
      : undefined;

    return this.foundItemsService.create({
      ...createFoundItemDto,
      imageUrl,
    });
  }

  @Get()
  findAll() {
    return this.foundItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.foundItemsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFoundItemDto: UpdateFoundItemDto,
  ) {
    return this.foundItemsService.update(+id, updateFoundItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.foundItemsService.remove(+id);
  }
}
