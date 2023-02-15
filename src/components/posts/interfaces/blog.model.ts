import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PostModel {
  @Field((type) => String)
  id: string;

  @Field((type) => String)
  title: string;

  @Field((type) => [CommentModel])
  comments: CommentModel[];
}

@ObjectType()
export class CommentModel {
  @Field((type) => String)
  id: string;

  @Field((type) => String)
  postId: string;

  @Field((type) => String)
  comment: string;
}
