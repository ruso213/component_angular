import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Productos } from '../types/product.types';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(
    private http: HttpClient
  ) { 

  }
  getAllProducts(){
    return this.http.get<Productos[]>('https://fakestoreapi.com/products')
  }
}
