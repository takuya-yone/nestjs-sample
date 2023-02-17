import { Module } from '@nestjs/common';
import { BooksResolver, CommentsResolver } from './books.resolver';
import { BooksService, CommentService } from './books.service';

@Module({
  providers: [BooksResolver, BooksService, CommentsResolver, CommentService],
})
export class BooksModule {}
