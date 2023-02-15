import { Args, Query, Resolver } from '@nestjs/graphql';
import { CommentModel } from './interfaces/comment.model';

@Resolver((of) => CommentModel)
export class CommentResolver {
  constructor() {}
  @Query(() => [CommentModel], { name: 'comment', nullable: true })
  async getPostss() {
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
}