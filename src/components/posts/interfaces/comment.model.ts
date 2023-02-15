import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CommentModel {
  @Field((type) => String)
  id: string;

  @Field((type) => String)
  title: string;
}
