import { Taskstatus } from "src/task.status.enum";
import { CreateTaskdto } from "../dto/createtask.dto";
import { taskfilterdto } from "../dto/taskfilter.dto";
import { task } from "../Models/task_model"

export interface task_contract
{
  getalltasks(filter : taskfilterdto): Promise<task[]>;
  // getalltasks(): Promise<task[]>;

  posttask(createtaskdto: CreateTaskdto):Promise<task>
  getbyId(id :number): Promise<task>
  updateTask(id: number , status: Taskstatus): Promise<any>
  deletebyId(id:number)
}