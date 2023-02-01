import { Taskstatus } from "../tasks.model";
import {IsIn, IsOptional, IsNotEmpty} from 'class-validator'

export class taskfilterdto
{   @IsOptional()
    // @IsIn([Taskstatus.DONE,Taskstatus.IN_PROGRESS, Taskstatus.OPEN])
    status : Taskstatus

    @IsOptional()
    @IsNotEmpty()
    search: string

    
    
}