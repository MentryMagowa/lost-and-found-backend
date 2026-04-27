import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './dto/create-dto';

// Define the shape of your User object
export interface User {
    id: number;
    name: string;
    email: string;
    role: string;
}

@Injectable()
export class UsersService {
    // Fix: Explicitly type the array as User[] instead of letting it be 'never[]'
    private users: User[] = [];

  create(createUserDto: CreateUserDto) {
    const newUser: User = {
        id: Date.now(),
        ...createUserDto
    };

    this.users.push(newUser);

    return {
        message: 'User created',
        user: newUser
    };
}

    findAll(): User[] {
        return this.users;
    }

    // To fix the "Unused method" errors, ensure these are called in your Controller!
    findOne(id: number): User {
        const user = this.users.find(u => u.id === id);
        if (!user) throw new NotFoundException(`User with ID ${id} not found`);
        return user;
    }

    update(id: number, updateUserDto: UpdateUserDto): User {
        const userIndex = this.users.findIndex(u => u.id === id);
        if (userIndex === -1) throw new NotFoundException(`User with ID ${id} not found`);

        this.users[userIndex] = { ...this.users[userIndex], ...updateUserDto };
        return this.users[userIndex];
    }

    remove(id: number) {
    const userIndex = this.users.findIndex(u => u.id === id);
    if (userIndex === -1) {
        throw new NotFoundException(`User with ID ${id} not found`);
    }

    const deletedUser = this.users.splice(userIndex, 1)[0];

    return {
        message: 'User deleted',
        user: deletedUser
    };
}
}
