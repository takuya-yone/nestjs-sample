import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn', 'debug', 'log'],
  });
  app.useGlobalPipes(new ValidationPipe());
  app.enableShutdownHooks();

  const config = new DocumentBuilder()
    .setTitle('nestjs example')
    .setDescription('nestjs-sample API description')
    .setVersion('1.0')
    .addTag('nestjs-sample')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
