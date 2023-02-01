
import { BadRequestException } from '@nestjs/common/exceptions';
import {PipeTransform}  from '@nestjs/common'
import { Taskstatus } from '../tasks.model';
export class taskvalidationpipe implements PipeTransform
{

    readonly allowedstatuses=[Taskstatus.DONE, Taskstatus.IN_PROGRESS, Taskstatus.OPEN]
    private isstatusvalid(status:any): boolean
    {
        // console.log(status);
        
        const ind= this.allowedstatuses.findIndex((s)=>{return s==status});
        if(ind!=-1)
        {
            // console.log(ind);
            
            return true
        }
        else{
            return false;
        }
    }
  transform(value: any)
  {
    console.log(value);
    value= value.toLowerCase();
    
    if(this.isstatusvalid(value))
    {
       return value;
    }
    else{
        throw new BadRequestException(`${value} is not valid status` );
    }

    
  }
}