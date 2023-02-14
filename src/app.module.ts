import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloworldController } from './helloworld/helloworld.controller';
import { HelloworldService } from './helloworld/helloworld.service';

@Module({
  imports: [],
  controllers: [AppController, HelloworldController],
  providers: [AppService, HelloworldService],
})
export class AppModule {}
