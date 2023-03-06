import { Body, Controller, Get, Inject, Post, Req, UseGuards, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { InjectModel } from 'src/helper/helper';
import { Credentialdto } from './Dto/Credentialdto';

import { User } from './Models/auth_model';
import { auth_contract } from './repository/auth_contract';
import { auth_repository } from './repository/auth_repository';



@Controller('auth')
export class AuthController {
    constructor(
        @Inject("auth_repository") private auth_repo: auth_contract              // by this i am loosely coupled to my auth_repository 
    ){}

    @Post('/signup')
    usersignup(@Body() credentialdto:Credentialdto) :Promise<void>
    {
        return this.auth_repo.usersignup(credentialdto);
    }

    @Post('/signin')
    signin(@Body() credentialdto:Credentialdto) : Promise<{accestoken:string}>
    {
            return this.auth_repo.usersignin(credentialdto)
            
    }

    @Post('/test')
    @UseGuards(AuthGuard())    // goes to strategy and gets jwt from frontend and verifies user 
     test(@Req() req)
    {
        console.log(req.user);
        
    }
    // test(@Req() req)
    // {
    //     console.log(req.user);
        
    // }
    @Get('/getusers')
    async getusers()
    {
        return await this.auth_repo.getallusers(); 
    }
    
    
    
    
    
}
