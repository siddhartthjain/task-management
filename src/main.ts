import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from '@nestjs/common'

async function bootstrap() {
   
  const app = await NestFactory.create(AppModule);

 app.useGlobalPipes(new ValidationPipe())
  if(process.env.NODE_ENV==='production')
  {
    app.enableCors({origin: "http://nestjs-task-management-frontend-sid.s3-website.ap-south-1.amazonaws.com"})
  }
  else{
    app.enableCors();
  }
  
 
 
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
