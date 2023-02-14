import { Controller, Get, Param } from '@nestjs/common';
import { HelloworldService } from './helloworld.service';

@Controller('helloworld')
export class HelloworldController {
  constructor(private readonly helloworldService: HelloworldService) {}

  @Get()
  getHello(): string {
    return this.helloworldService.getHelloWorld();
  }

  @Get(':id/')
  routeParameters(
    @Param('id') id: string,
    // @Param('detailId') detailId: string,
  ) {
    return this.helloworldService.getHelloWorld_id(id);
  }
}
