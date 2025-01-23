import { User } from "../types/type";

export interface RegisterApiResponse {
  message: string;
  data: User;
  statusCode: number;
  sucess: boolean;
}
export interface registersentType {
  name: string;
  email: string;
  phone: string;
  password: string;
}
// export interface FailureResponseType {
//   sucess: boolean;
//   statusCode: number;
//   message:string
// }

export interface LoginSentType {
  email: string;
  password: string;
}
type payload = {
  email: string;
  password: string;
};

export interface changePasswordsentType {
  token: string;
  payload: payload;
}
export interface addToCartSentType{
  userId:string;
  productId:string;
  quantity:number
}