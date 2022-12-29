import { Component , Input, OnInit, Output, EventEmitter } from '@angular/core';
import { id } from 'date-fns/locale';
import { Productos } from '../../types/product.types';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  @Output() AddProducts = new EventEmitter<Productos>()
  
  @Output() evt2 = new EventEmitter()

  @Input() product:Productos={
    title: ``,
    price: 0,
    category:``,
    image:``,
    description:``
  }
  
  AddProduct(){
    
    this.AddProducts.emit(this.product)
  }
}
