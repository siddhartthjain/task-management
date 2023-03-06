// this model is ctreated with objection and it is beacuse due to orm
import { ModelClass } from 'objection';
import { Model, RelationMappings, RelationMappingsThunk } from 'objection';
import { BaseModel } from 'src/db/BaseModel';
// import { User } from 'src/auth/Models/auth_model';
import { Taskstatus } from 'src/task.status.enum';

export class task extends BaseModel {
  static tableName = 'task_table';
  id: number;
  title: string;
  description: string;
  status: Taskstatus;
  user_id: number;

  static get relationMappings() {
   // console.log(this.modelPaths)
    return {
      user: {
        relation: Model.BelongsToOneRelation,
        modelClass: "auth_model",   // just need to give the name of folder
        join: {
          from: 'task_table.user_id',
          to: 'user_table.id',
        },
      },
    };
  }
}
