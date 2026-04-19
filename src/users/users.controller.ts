import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/create-dto';
import {UsersService} from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Get()
    findAll() {
        return this.usersService.findAll();
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        // Note: +id converts the string param to a number
        return this.usersService.update(+id, updateUserDto);
    }

    // ... other methods call this.usersService.xxx
    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersService.findOne(+id); // Method is now "used"
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usersService.remove(+id); // Method is now "used"
    }
}