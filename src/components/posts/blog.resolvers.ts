import { Args, Query, Resolver } from '@nestjs/graphql';
import { PostModel, CommentModel } from './interfaces/blog.model';
import { v4 as uuidv4 } from 'uuid';

@Resolver((of) => PostModel)
export class BlogResolver {
  constructor() {}

  @Query(() => [PostModel], { name: 'posts', nullable: true })
  async getPosts() {
    return [
      {
        id: '1',
        title: 'NestJS is so good.',
      },
      {
        id: '2',
        title: 'GraphQL is so good.',
      },
    ];
  }

  @Query(() => [CommentModel], { name: 'comments', nullable: true })
  async getComments() {
    return [
      {
        id: '1',
        postId: '1',
        comment: uuidv4(),
      },
      {
        id: '2',
        postId: '1',
        comment: uuidv4(),
      },
      {
        id: '3',
        postId: '2',
        comment: uuidv4(),
      },
      {
        id: '4',
        postId: '2',
        comment: uuidv4(),
      },
    ];
  }
}
