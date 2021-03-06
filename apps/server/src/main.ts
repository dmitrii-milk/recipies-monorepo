import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(config?.app?.port || 3000);
}

bootstrap();
