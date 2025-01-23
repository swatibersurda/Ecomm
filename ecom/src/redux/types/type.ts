export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  role:string;
  createdAt:string;
  updatedAt:string;
  acessToken: string;
}

export interface Product{
    _id: string;
    name: string;
    stock: number;
    price: number;
    pic: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}


