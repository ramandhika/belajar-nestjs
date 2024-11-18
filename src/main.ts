import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(parseInt(process.env.APP_PORT) ?? 3000);

  Logger.log(`Jalan Sudah dibuat 🚀 ` + `http://localhost:${process.env.APP_PORT}`, 'Runing Port');
}
bootstrap();
