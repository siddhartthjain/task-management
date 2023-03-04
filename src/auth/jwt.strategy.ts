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
                jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey:"topsecret51"
        }
            
        )
    }
   
    async validate(payload :jwtpayload) :Promise<User>
    {
        console.log("im heere sun lo meri bhi");
        
       const {username} = payload;
       const user= this.auth_repo.getusername(username);
       return user
    }
}