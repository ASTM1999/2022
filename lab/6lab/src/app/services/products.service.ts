import { Injectable } from '@angular/core';
import { productsType } from '../products.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  product_list: productsType = [
    {p_id: 100001, p_name: 'Inter Core i7 Gen 10th', p_quantity:10, p_price:7000},
    {p_id: 100002, p_name: 'NVDIA Geforce GTX 1650', p_quantity:5, p_price:5000},
    {p_id: 100003, p_name: '240 GB SSD SATA Kingston A4000', p_quantity:8, p_price:13000},

  ]
  constructor() { }
  getAllProduct(){
    return this.product_list;
  }
}
