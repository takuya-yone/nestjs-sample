import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloworldService {
  getHelloWorld(): string {
    return 'getHelloWorld!';
  }

  getHelloWorld_id(id: string): string {
    return 'getHelloWorld!' + id;
  }
}
