import { Module } from '@nestjs/common';
import { PostsResolver } from './post.resolvers';
import { CommentResolver } from './comment.resolvers';

@Module({
  providers: [PostsResolver],
})
export class PostsModule {}
