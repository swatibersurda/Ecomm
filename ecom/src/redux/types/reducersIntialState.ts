import { shippingInfo } from "../api/apiResultType";
import { CartItem, Product, User } from "./type";
// we have taken a User which we made and exported here.
export interface useReducerIntialState{
  user:User|null,
  loading:boolean,

}
export interface productIntialState{
  dataArray:Product[]|[];
  loading:boolean
}
export interface cartIntialState{
  cartArray:CartItem[]|[];
  loading:boolean;
  totalCountCart:number
}

export interface shippingInitialState{
  userId:string|null,
  shippingInfo:shippingInfo
}