// import { isNotEmpty } from "class-validator";
import { IsNotEmpty } from "class-validator";



export class CreateTaskdto
{
    @IsNotEmpty()
    title : string;

    @IsNotEmpty()
    description : string
}