import { User } from "../types/type";

export interface RegisterApiResponse{
    message:string;
    data:User,
    statusCode: 201,
    sucess: true
}
export interface registersentType{
    name:string;
    email:string;
    phone:string;
    password:string;
}
