// import ShippingForm from "../../Components/ShippingForm";
import { User, Userplace } from "../types/type";

export interface RegisterApiResponse {
  message: string;
  data: User;
  statusCode: number;
  sucess: boolean;
}
export interface placeOrderResponse{
  message: string;
  data: Userplace;
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
export interface removeFromcart{
  userId:string;
  productId:string;
  quantity:number|null
}
 export type shippingInfo= {
  address: string;
  city: string;
  state:string;
  country:string;
  pinCode:string;
}
export interface placeOrerSentType{
  userId:string;
  shippingInfo:shippingInfo;
  
   
}
export interface addprofileSentType{
  id:string;
  email:string
  pic:string
}

export interface apiError{
  sucess:boolean;
  message:string;
  statusCode:number
}
export interface email{
  email:string
}