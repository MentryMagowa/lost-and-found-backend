import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Lost & Found Management System API')
    .setDescription('API documentation for the Lost & Found Management System')
    .setVersion('1.0.0')
    .addTag('users', 'User management endpoints')
    .addTag('lost-items', 'Lost items management endpoints')
    .addTag('found-items', 'Found items management endpoints')
    .addTag('claims', 'Claims management endpoints')
    .addTag('matches', 'Matches management endpoints')
    .addTag('notifications', 'Notifications management endpoints')
    .addTag('reports', 'Reports management endpoints')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/',
  });

  await app.listen(process.env.PORT || 3008);
}
bootstrap();
