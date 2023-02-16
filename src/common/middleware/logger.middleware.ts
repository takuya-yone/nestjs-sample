import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
// import { Logger } from '@nestjs/common';

// const logger = new Logger('LoggerMiddleware');

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // console.log('Request...');
    // logger.log(req.url);
    next();
  }
}
