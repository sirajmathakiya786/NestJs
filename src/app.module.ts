import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UserService } from './users/users.service';
import { BookModule } from './book/book.module';



@Module({
  imports: [UsersModule, BookModule],
  controllers: [UsersController],
  providers: [UserService],
  exports: []
})
export class AppModule {
  constructor(){
    console.log('App Modules');
    }
}
