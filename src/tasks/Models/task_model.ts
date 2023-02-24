// this model is ctreated with objection and it is beacuse due to orm

import {Model} from 'objection'


export class task_model extends Model
{
  static get tableName(){
    return "task_table"
  }
}