import { Field, ID, InputType, Int } from '@nestjs/graphql';
import { Max, MaxLength, Min } from 'class-validator';

@InputType()
export class NewBookInput {
  @Field((type) => String)
  @MaxLength(30)
  title: string;

  @Field((type) => String)
  author: string;

  @Field((type) => Int)
  @Min(0)
  @Max(9999)
  price: number;
}

@InputType()
export class NewCommentInput {
  @Field((type) => Int)
  bookId: number;

  @Field((type) => String)
  @MaxLength(999)
  comment: string;
}
