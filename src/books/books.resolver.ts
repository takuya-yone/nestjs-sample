import { NotFoundException } from '@nestjs/common';
import {
  Args,
  Int,
  Mutation,
  Query,
  Resolver,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Book, Comment } from './book';
import { BooksService, CommentService } from './books.service';
import { NewBookInput, NewCommentInput } from './dto/newBook.input';

@Resolver((of) => Book)
export class BooksResolver {
  constructor(
    private booksService: BooksService,
    private commentsService: CommentService,
  ) {}

  @Query((returns) => [Book])
  books(): Promise<Book[]> {
    return this.booksService.findAll();
  }

  @Query((returns) => Book)
  async getBookById(@Args({ name: 'id', type: () => Int }) id: number) {
    const book = await this.booksService.findOneById(id);
    if (!book) {
      throw new NotFoundException(id);
    }
    return book;
  }

  @Query((returns) => [Book])
  async getMabyBookById(@Args({ name: 'id', type: () => Int }) id: number) {
    const book = await this.booksService.findManyById(id);
    if (!book) {
      throw new NotFoundException(id);
    }
    return book;
  }

  @Query((returns) => [Book])
  async getMabyBookByAuthor(
    @Args({ name: 'author', type: () => String }) author: string,
  ) {
    const book = await this.booksService.findManyByAuthor(author);
    if (!book) {
      throw new NotFoundException(author);
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

  // @ResolveField()
  // async books(@Parent() book: Book) {
  //   const { id } = book;
  //   return this.commentsService.findManyById(id);
  // }
}

@Resolver((of) => Comment)
export class CommentsResolver {
  constructor(private commentService: CommentService) {}

  @Query((returns) => [Comment])
  comments(): Promise<Comment[]> {
    return this.commentService.findAll();
  }

  @Query((returns) => Comment)
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
