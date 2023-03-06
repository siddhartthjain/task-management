import { ConflictException, HttpException, HttpStatus, Injectable, InternalServerErrorException } from "@nestjs/common";
import { UniqueViolationError } from "objection";
import { Credentialdto } from "../Dto/Credentialdto";
import { User } from "../Models/auth_model";
import { auth_contract } from "./auth_contract";
import  * as bcrypt from 'bcrypt'
import { JwtService } from "@nestjs/jwt";
import { jwtpayload } from "../payload.interface";
 
@Injectable()
export class auth_repository implements auth_contract
{
    constructor(private jwtservice: JwtService){}

    private async hashpass(password: string, salt: string) :Promise<string> 
    {
        const result= await bcrypt.hash(password, salt);
        return result;
    }
    async usersignup(credentialdto: Credentialdto): Promise<void>    // we dont need any jwt here because we will revert him back to sigi in page to get his jwt tokem
    {
        try {
            console.log(credentialdto);
          const salt= await bcrypt.genSalt();
         const {username, password}=credentialdto;
         const dummy= new User;
         dummy.username= username;
         dummy.password=  await this.hashpass(password, salt);
         dummy.user_salt= salt
         console.log(dummy.password);
         
          await User.query().insert(dummy) 
        } 
        catch (error) {
            if (error instanceof UniqueViolationError)
            {
                throw new HttpException('UserExists', HttpStatus.CONFLICT)
            }
            else{
                console.log(error);
                
            }
        }
       
    }
     
    async getallusers()
    {
        const data=  User.query().withGraphFetched('tasks')
        data.debug();
        return await data;
    }
    async getusername(username) :Promise<User>
    {
         const user = User.query().where('username', username).first();
         if(!user)
         {
            throw new HttpException("Invalid Credential", HttpStatus.UNAUTHORIZED)
         }
         else{
            // console.log("im here");
            
            return user;
         }
    }
    async usersignin(credentialdto: Credentialdto): Promise<{accestoken:string}>
    {
        const {username, password}= credentialdto;
     try {
        const user = await User.query().where('username', username).first();
         console.log(user);
        
        if(user)
        {
            const usersalt= (await user).user_salt;
            const userpass = (await user).password;
            if(userpass=== await bcrypt.hash(password,usersalt))
            {
                const payload: jwtpayload = {username};
                const accestoken = this.jwtservice.sign(payload);
                return {accestoken};
            }
            else{
                throw new HttpException("Invalid Credential", HttpStatus.UNAUTHORIZED)
            }
            
  
        }
        else{
            throw new HttpException("Invalid Credential", HttpStatus.UNAUTHORIZED)
        }
     } catch (error) {
         
         return  error;
        // console.log(error)
     }
        
    }
}