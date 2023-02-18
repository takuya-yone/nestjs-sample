import { Field, ID, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class Book {
  @Field((type) => ID)
  id: number;

  @Field()
  title: string;

  @Field()
  author: string;

  @Field((type) => Int)
  price: number;

  @Field()
  createdAt: Date;

  // @Field((type) => [Comment], { nullable: true })
  // comments: Comment[];
}

@ObjectType()
export class Comment {
  @Field((type) => ID)
  id: number;

  @Field((type) => ID)
  bookId: number;

  @Field()
  comment: string;

  @Field()
  createdAt: Date;
}
