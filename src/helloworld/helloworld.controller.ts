import { Controller, Get, Param, Req, ParseIntPipe } from '@nestjs/common';
import { HelloworldService } from './helloworld.service';
import { Request } from 'express';
import { Max, MaxLength, Min } from 'class-validator';

@Controller('helloworld')
export class HelloworldController {
  constructor(private readonly helloworldService: HelloworldService) {}

  @Get()
  getHello(@Req() request: Request): string {
    return this.helloworldService.getHelloWorld(request);
  }

  @Get(':id/')
  routeParameters(
    @Param('id', ParseIntPipe) id: string,
    @Req() request: Request,
    // @Param('detailId') detailId: string,
  ) {
    console.log(id);
    return this.helloworldService.getHelloWorld_id(id, request);
  }
}
