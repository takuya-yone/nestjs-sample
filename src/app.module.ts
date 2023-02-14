import {
  Module,
  MiddlewareConsumer,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloworldController } from './helloworld/helloworld.controller';
import { HelloworldService } from './helloworld/helloworld.service';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [],
  controllers: [AppController, HelloworldController],
  providers: [AppService, HelloworldService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
