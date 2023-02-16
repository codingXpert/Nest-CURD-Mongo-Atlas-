import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //swagger
  const config = new DocumentBuilder()
  .setTitle('CURD Api')
  .setDescription('Prod API description')            // to access swagger Api:-
  .setVersion('1.0')                                // i. npm run start 
  .addTag('cats')                                  //  ii. http://localhost:3000/api
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);                     // here this 'api' is used in url to access swagger. Instead of api we can write any thing & attach it to the end of url
  await app.listen(3000);
}
bootstrap();
