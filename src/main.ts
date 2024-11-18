import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const port = parseInt(process.env.APP_PORT) ?? 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);

  Logger.log(`Jalan Sudah dibuat 🚀 ` + `http://localhost:${port}`, 'Runing Port');
}
bootstrap();
