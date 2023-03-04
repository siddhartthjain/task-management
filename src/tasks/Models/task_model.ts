// this model is ctreated with objection and it is beacuse due to orm

import {Model} from 'objection'
import { Taskstatus } from 'src/task.status.enum';


export class task extends Model
{
   static tableName= 'task_table';
   id:number;
   title: string;
   description: string;
   status: Taskstatus;


}