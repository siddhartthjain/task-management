import { Model } from "objection";
import * as bcrypt from 'bcrypt';
import { log } from "console";
import { BaseModel } from "src/db/BaseModel";
export class User extends BaseModel
{
    static tableName= 'user_table';
    id: number;
    username: string;
    password: string;
    user_salt:string;  
    static get relationMappings()
   {
      console.log("im here");
    //   const Task= require('../../tasks/Models/task_model');
      return {
         tasks:
         {
            relation: Model.HasManyRelation,
            modelClass :"task_model",
            join:
            {
               from :'user_table.id',
               to: 'task_table.user_id'
            }
         }
      }

   };
} 