import { Module , Global } from '@nestjs/common';
import { databaseProviders } from './provider';


@Global()
@Module({
    imports:[],
    providers:[...databaseProviders],
    exports:[...databaseProviders]
})
export class DbModule {}
