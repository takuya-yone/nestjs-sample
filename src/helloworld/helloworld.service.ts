import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class HelloworldService {
  getHelloWorld(request: Request): string {
    console.log(request.url);
    return 'getHelloWorld!';
  }

  getHelloWorld_id(id: string, request: Request): string {
    // console.log(request.url);
    return 'getHelloWorld!' + id;
  }
}
