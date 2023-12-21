import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('users')
export class UsersController {

    //public userService : UserService = new UserService();

    constructor(private userService: UserService) {}

    @Post('/add')
    addBook(): string{
        return this.userService.addBook();
    }

    @Put('/update')
    updateBook(): string{
        return this.userService.updateBook();
    }

    @Delete('/delete')
    deleteBook(): string{
        return this.userService.deleteBook();
    }

    @Get('findAll')
    findAll() {
    return this.userService.findAll();
    }
    // @Get('/findBookById/:bookId')
    // findBookById(@Param() params): string{
    //     console.log(params.bookId);
    //     return `This will find a book of id ${params.bookId}`
    // }
}
