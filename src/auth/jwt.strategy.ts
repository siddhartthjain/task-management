import { Inject } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import {Strategy, ExtractJwt} from 'passport-jwt'
import { User } from "./Models/auth_model";
import { jwtpayload } from "./payload.interface";
import { auth_contract } from "./repository/auth_contract";

export class JwtStrategy extends PassportStrategy(Strategy)
{
    constructor(  @Inject('auth_repository') private auth_repo : auth_contract    )
    { 

        super(
            {
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),    // this is the decoding of jwt and getting the payload 
            secretOrKey:"topsecret51"
        }
            
        )
    }
   
    async validate(payload :jwtpayload) :Promise<User>  // this function is very imp as it is returning a user object in req
    {
        console.log("im heere sun lo meri bhi");
        
       const {username} = payload;  // here we get payload which we can use further to edit  the request to our need
       const user= await this.auth_repo.getusername(username);
    //    console.log(user);
       
       return user
    }
}