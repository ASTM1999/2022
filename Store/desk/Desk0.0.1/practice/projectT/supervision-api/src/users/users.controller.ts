import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.interface';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Get()
    async findAll(): Promise<any[]> {
        return await this.usersService.findAll();
    }
    @Get(':id')
    findName(@Param() params) {
        return this.usersService.findById(params.id);
    }

    @Post('/check')
    findByEmail(@Body() users: Users) {
        return this.usersService.findByEmail(users);
    }

    @Post('/login')
    login(@Body() item: any) {
        return this.usersService.login(item);
    }

    @Post('/approve')
    approve(@Body() item: any) {
        return this.usersService.approve(item);
    }


    @Put()
    updatInfo(@Body() item: any) {

        return this.usersService.put(item);

    }

    @Post()
    saveVideo(@Body() users: Users) {
        this.usersService.create(users);
        return true;
    }

    @Delete(':id')
    deleteById(@Param() params) {
        return this.usersService.removeById(params.id);
    }
}
