import { Module } from '@nestjs/common';
import { PostsResolver } from './post.resolvers';
import { CommentsResolver } from './comment.resolvers';

@Module({
  providers: [PostsResolver, CommentsResolver],
})
export class PostsModule {}
