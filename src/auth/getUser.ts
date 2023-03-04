import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const GetUser= createParamDecorator((data, ctx:ExecutionContext)=>{
    console.log("im here");
    
    console.log(ctx);
    return ctx.getArgByIndex(2).req;
}
    );
