import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloworldService {
  getHelloWorld(): string {
    return 'getHelloWorld!';
  }
}
