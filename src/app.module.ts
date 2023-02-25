import {
  Module,
  MiddlewareConsumer,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { BooksModule } from './books/books.module';
import { HelloworldModule } from './helloworld/helloworld.module';
import { GoogleModule } from './google/google.module';
import * as path from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: path.join(
        process.cwd(),
        'src/generated/graphql/schema.gql',
      ),
      sortSchema: true,
      driver: ApolloDriver,
    }),
    HelloworldModule,
    BooksModule,
    GoogleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
