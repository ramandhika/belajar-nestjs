import 'dotenv/config';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilekitaModule } from './filekita/filekita.module';

@Module({
  imports: [
    TypeOrmModule.forRoot ({
      type: process.env.DB_TYPE as 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      dropSchema: true,
      logging: true,
      entities: ['src/**/*.entity.ts', 'dist/**/*.entity.js'],
    }),
    FilekitaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
