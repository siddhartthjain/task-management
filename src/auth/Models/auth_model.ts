import { Model } from "objection";
import * as bcrypt from 'bcrypt'
export  class User extends Model
{
    static tableName= 'user_table';
    id: number;
    username: string;
    password: string;
    user_salt:string;

  

    
} 