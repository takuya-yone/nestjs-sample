import { NotFoundException } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book, Comment } from './book';
import { BooksService, CommentService } from './books.service';
import { NewBookInput, NewCommentInput } from './dto/newBook.input';

@Resolver((of) => Book)
export class BooksResolver {
  constructor(private booksService: BooksService) {}

  @Query((returns) => [Book])
  books(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Query((returns) => Book)
  async getBook(@Args({ name: 'id', type: () => Int }) id: number) {
    const book = await this.booksService.findOneById(id);
    if (!book) {
      throw new NotFoundException(id);
    }
    return book;
  }

  @Mutation((returns) => Book)
  addBook(@Args('newBook') newBook: NewBookInput): Promise<Book> {
    return this.booksService.create(newBook);
  }

  @Mutation((returns) => Boolean)
  async removeBook(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.booksService.remove(id);
  }
}

@Resolver((of) => Comment)
export class CommentsResolver {
  constructor(private commentService: CommentService) {}

  @Query((returns) => [Comment])
  comments(): Promise<Comment[]> {
    return this.commentService.findAll();
  }

  @Query((returns) => Book)
  async getComment(@Args({ name: 'id', type: () => Int }) id: number) {
    const comment = await this.commentService.findOneById(id);
    if (!comment) {
      throw new NotFoundException(id);
    }
    return comment;
  }

  @Mutation((returns) => Comment)
  addComment(
    @Args('newComment') newComment: NewCommentInput,
  ): Promise<Comment> {
    return this.commentService.create(newComment);
  }

  @Mutation((returns) => Boolean)
  async removeComment(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.commentService.remove(id);
  }
}
