import { Injectable } from '@angular/core';
import {IProduct} from '../interface/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
products: IProduct[] = [
  {
    id: 1,
    name: 'iphone X' ,
    type: 'dien thoai',
    price: 120000,
    quantity: 1,
    description: 'hang moi ve'
},
  {
    id: 2,
    name: 'oppo' ,
    type: 'dien thoai',
    price: 120000,
    quantity: 1,
    description: 'dep'
  },
  {
    id: 3,
    name: 'sam sung' ,
    type: 'dien thoai',
    price: 120000,
    quantity: 1,
    description: 'hang moi ve'
  },
  {
    id: 4,
    name: 'iphone 11' ,
    type: 'dien thoai',
    price: 120000,
    quantity: 1,
    description: 'hang moi ve'
  },
  {
    id: 5,
    name: 'vin smart' ,
    type: 'dien thoai',
    price: 120000,
    quantity: 1,
    description: 'hang moi ve'
  }
];
  constructor() { }
  getAll(): IProduct[]{
    return this.products;
  }
  add(product: IProduct): void{
    this.products.push(product);
  }
  findId(id: number): number{
    return this.products.findIndex(item => item.id === id);
  }
  getProductById(id: number): IProduct{
    const index = this.findId(id);
    return this.products[index];
  }
  delete(id: number): void{
    const index = this.findId(id);
    this.products.splice(index, 1);
  }
  edit(product: IProduct, id: number): void{
    const index = this.findId(id);
    this.products.splice(index , 1 , product);
    console.log(this.products);
  }
}
