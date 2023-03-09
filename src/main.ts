import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//import { AppModule } from './GoogleOAuth2.0/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
