import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    addBook(): string{
        return 'This will add book'
    }

    updateBook(): string{
        return 'This will Update book'
    }

    deleteBook(): string{
        return 'This will delete book'
    }

    findAll() {
        return 'This route uses a wildcard';
    }
}