import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { SwaggerModule , DocumentBuilder} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Lost and fount API')
    .setDescription('API for managing lost and found items')
    .setVersion('1.0')
    .build()

  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api',app,document);

  // app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // app.useStaticAssets(join(__dirname, '..', 'uploads'), {
  //   prefix: '/uploads/',
  // });

  await app.listen(process.env.PORT || 3008);
}
bootstrap();
