import { Injectable } from '@angular/core';
import { Productos } from '../types/product.types';
import {BehaviorSubject  } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private myShoppingCar : Productos[]= []

  private myCart = new BehaviorSubject<Productos[]>([])
  myCart$ = this.myCart.asObservable()

  constructor() { }
  addProducts(product:Productos){
    this.myShoppingCar.push(product)
    this.myCart.next(this.myShoppingCar)
  }
  getTotal(){
    return this.myShoppingCar.reduce((sum, item)=>sum + item.price, 0)
  }
  getShoppingCart() {
    return this.myShoppingCar;
  }
}
