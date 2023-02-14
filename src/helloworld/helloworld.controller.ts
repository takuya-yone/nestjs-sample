import { Controller, Get, Param, Req } from '@nestjs/common';
import { HelloworldService } from './helloworld.service';
import { Request } from 'express';

@Controller('helloworld')
export class HelloworldController {
  constructor(private readonly helloworldService: HelloworldService) {}

  @Get()
  getHello(@Req() request: Request): string {
    return this.helloworldService.getHelloWorld(request);
  }

  @Get(':id/')
  routeParameters(
    @Param('id') id: string,
    @Req() request: Request,
    // @Param('detailId') detailId: string,
  ) {
    return this.helloworldService.getHelloWorld_id(id, request);
  }
}
