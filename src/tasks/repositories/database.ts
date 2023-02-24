import { Injectable } from "@nestjs/common";
import { InjectModel } from "src/helper/helper";
import { task_model } from "../Models/task_model";
import { task_contract } from "./contract";

@Injectable()
export class task_repository implements task_contract
{
    @InjectModel(task_model)
    model: task_model;
    async function1() {
        const connection=task_model.query()
        const data = await connection
       return data
    }
}