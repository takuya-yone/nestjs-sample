import { Module } from '@nestjs/common';
import { BlogResolver } from './blog.resolvers';

@Module({
  providers: [BlogResolver],
})
export class BlogModule {}
