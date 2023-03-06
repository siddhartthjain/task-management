import { User } from "src/auth/Models/auth_model";
import { Taskstatus } from "src/task.status.enum";
import { CreateTaskdto } from "../dto/createtask.dto";
import { taskfilterdto } from "../dto/taskfilter.dto";
import { task } from "../Models/task_model"

export interface task_contract
{
  getalltasks(filter : taskfilterdto, user:User): Promise<task[]>;
  // getalltasks(): Promise<task[]>;

  posttask(createtaskdto: CreateTaskdto,user:User):Promise<task>
  getbyId(id :number, user:User): Promise<task>
  updateTask(id: number , status: Taskstatus, user:User): Promise<any>
  deletebyId(id:number, user:User)
}