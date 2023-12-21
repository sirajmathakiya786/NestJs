import { Injectable } from '@nestjs/common';
import { Book } from './data/book.dto';

@Injectable()
export class BookService {
    
    public book : Book[] = [];

    addBookService(book: Book): string {
        this.book.push(book);
        return "Books has been successfully added"
    }

    updateBookService( book: Book): string {
        let index = this.book.findIndex((currentIndex)=>{
            return currentIndex.id == book.id;
        })
        this.book[index] = book
        return `Book has been successfully updated`
    }

    deleteBookService( bookId : string) : string{
        this.book = this.book.filter((book)=>{
            return book.id != bookId
        })
        return "Book has been deleted"
    }

    findAllBook(): Book[] {
        return this.book;
    }
}
