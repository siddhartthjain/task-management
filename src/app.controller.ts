import { Controller, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import {
  
  Get,
 
} from '@nestjs/common/decorators';
import { AppService } from './app.service';



@Controller('')

export class AppController {
  constructor(
    private readonly appservice:AppService
  ){}

  @Get()
  helloworld()
  {
    this.appservice.getHello();
  }
      


  
  
}
