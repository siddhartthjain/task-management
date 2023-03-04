import { IsString, matches, maxLength, MinLength, Matches, MaxLength } from "class-validator";
import { minLength  } from "class-validator";



export class Credentialdto
{
   @IsString()
   @MinLength(4)
  username:string;

@IsString()
@MinLength(8)
@MaxLength(12)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password is too weak',
  })
  password:string;
}