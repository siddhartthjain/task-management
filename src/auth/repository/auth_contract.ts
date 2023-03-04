import { Credentialdto } from "../Dto/Credentialdto"
import { User } from "../Models/auth_model"

export interface auth_contract
{
    usersignup(credentialdto: Credentialdto):Promise<void>
    // userlogin(credentaildto : Credentialdto):Promise<void>
    usersignin(credentialdto: Credentialdto):Promise<{accestoken:string}>
    getusername(username:string): Promise<User>
}