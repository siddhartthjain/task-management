import { Module , Global } from '@nestjs/common';
import { databaseProviders } from './provider';


@Global()  // this global makes the module global that means the service that this module is using will be used by every module once all modules are registered with app.module including this modeule as well
@Module({
    imports:[],
    providers:[...databaseProviders],  
    exports:[...databaseProviders]  // why export and providers are same because when module is being used by other module it will also used the services so that services need to exported as well beacuse nestjs doesnt handle initialisation of objects of classes we are making so we need to export the services as well.
})
export class DbModule {}
