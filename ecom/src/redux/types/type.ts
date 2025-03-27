export interface User {
  _id: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  role:string;
   pic?: string;
  createdAt:string;
  updatedAt:string;
  acessToken: string;
}
export interface Userplace {
  id: string;
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

export type CartItem = {
  productId: {
    _id: string;
    name: string;
    pic: string;
    price: number;
  };
  quantity: number;
};

export type CartResponse = {
  data: {
    items: CartItem[];
    totalAmount: number;
  };
};
