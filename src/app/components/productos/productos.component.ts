import { Component , Input, EventEmitter , Output, OnInit} from '@angular/core';
import { Productos } from '../../types/product.types';
import { StoreService } from "../../service/store.service";
import { ProductApiService } from "../../service/product-api.service";
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {
  constructor(    
    private storeService: StoreService,
    private ProductService: ProductApiService
    ){
      this.shoppingCar= this.storeService.getShoppingCart()
    }
  shoppingCar:Productos[]=[
   
  ]

  @Output() event = new EventEmitter<number>()
  products:Productos[]=[
     {
      price:10,
      title: `idk`,
      category:`sdfr`,
      image:``,
      description:``
    }
  ]
  ngOnInit(): void{
    this.ProductService.getAllProducts().subscribe(
      data => {
        this.products = data
      }
    )
  }
  ProductAdd(add:Productos){
    const productobuscado : Productos | undefined = this.products.find(item => item === add)
    if(productobuscado){
      this.storeService.addProducts(productobuscado)
       
      this.event.emit(this.storeService.getTotal())
      
      console.log(this.storeService);
      console.log(this.shoppingCar);
     
      }
    }
  }

