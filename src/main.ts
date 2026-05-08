import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { DocumentBuilder,SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule,new FastifyAdapter({connectionTimeout: 0}) as any);

  const config=new DocumentBuilder()
  .setTitle('AI Powered Langchain App')
  .setDescription('Complete AI Powered Langchain Application')
  .setVersion('v1')
  .build();
  const document=SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api',app,document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
