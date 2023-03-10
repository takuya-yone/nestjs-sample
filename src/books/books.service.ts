import { Injectable } from '@nestjs/common';
import { Book, Comment } from './book';
import { NewBookInput, NewCommentInput } from './dto/newBook.input';

let books = [
  {
    id: 1,
    title: 'test 1',
    author: 'Joe',
    price: 1000,
    createdAt: new Date(),
  },
  {
    id: 2,
    title: 'test 2',
    author: 'Maria',
    price: 2000,
    createdAt: new Date(),
  },
  {
    id: 3,
    title: 'test 3',
    author: 'Smith',
    price: 3000,
    createdAt: new Date(),
  },
  {
    id: 4,
    title: 'test 4',
    author: 'Joe',
    price: 3000,
    createdAt: new Date(),
  },
] as Book[];

let comments = [
  {
    id: 1,
    bookId: 2,
    comment: Math.random().toString(32).substring(2),
    createdAt: new Date(),
  },
  {
    id: 2,
    bookId: 2,
    comment: Math.random().toString(32).substring(2),
    createdAt: new Date(),
  },
  {
    id: 3,
    bookId: 3,
    comment: Math.random().toString(32).substring(2),
    createdAt: new Date(),
  },
] as Comment[];

@Injectable()
export class BooksService {
  findAll(): Promise<Book[]> {
    return Promise.resolve(books);
  }

  findManyByAuthor(author: string): Promise<Book[]> {
    const book = books.filter((book) => book.author === author);
    return Promise.resolve(book);
  }

  findManyById(id: number): Promise<Book[]> {
    const book = books.filter((book) => book.id === id);
    return Promise.resolve(book);
  }

  findOneById(id: number): Promise<Book> {
    const book = books.find((book) => book.id === id);
    return Promise.resolve(book);
  }

  create(data: NewBookInput): Promise<Book> {
    const book: Book = {
      ...data,
      id: Date.now(),
      createdAt: new Date(),
      comments: [],
    };
    books.push(book);

    return Promise.resolve(book);
  }

  async remove(id: number): Promise<boolean> {
    books = books.filter((book) => book.id !== id);
    return true;
  }
}

@Injectable()
export class CommentService {
  findAll(): Promise<Comment[]> {
    return Promise.resolve(comments);
  }

  findManyByBookId(bookId: number): Promise<Comment[]> {
    const comment = comments.filter((comment) => comment.bookId === bookId);
    return Promise.resolve(comment);
  }

  findManyById(id: number): Promise<Comment[]> {
    const comment = comments.filter((comment) => comment.bookId === id);
    return Promise.resolve(comment);
  }

  findOneById(id: number): Promise<Comment> {
    const comment = comments.find((comment) => comment.id === id);
    return Promise.resolve(comment);
  }

  create(data: NewCommentInput): Promise<Comment> {
    const comment: Comment = {
      ...data,
      id: Date.now(),
      createdAt: new Date(),
    };
    console.log(comment);
    comments.push(comment);
    console.log(comments);

    return Promise.resolve(comment);
  }

  async remove(id: number): Promise<boolean> {
    comments = comments.filter((comment) => comment.id !== id);
    return true;
  }
}
