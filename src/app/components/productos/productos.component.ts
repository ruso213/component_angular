import { Component , Input, EventEmitter} from '@angular/core';
import { Productos } from '../../types/product.types';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent {
  shoppingCar:Productos[]=[

  ]

  products:Productos[]=[
  
  {
      id:`1`,
      img:`https://m.media-amazon.com/images/I/718U4GqkvPL._AC_SX425_.jpg`,
      name:`juguetron`,
      price:270
    },
    {
      id:`2`,
      img:`https://doto.vtexassets.com/arquivos/ids/223272/darkhouse-master-chief-verde-dotomexico-vista-dinamica.jpg?v=637957681339100000`,
      name:`master chief `,
      price:1070
    },
    {
      id:`3`,
      img:`https://m.media-amazon.com/images/I/51TH3cSL-iS._AC_SX425_.jpg`,
      name:`deku`,
      price:1300
    },
    {
      id:`4`,
      img:`https://m.media-amazon.com/images/I/61E3foqg+lL._AC_SY679_.jpg`,
      name:`zero two`,
      price:270
    },
    {
      id:`5`,
      img:`https://m.media-amazon.com/images/I/51TH3cSL-iS._AC_SX425_.jpg`,
      name:`deku`,
      price:1300
    },
    {
      id:`6`,
      img:`https://m.media-amazon.com/images/I/61E3foqg+lL._AC_SY679_.jpg`,
      name:`zero two`,
      price:270
    },
    {
      id:`7`,
      img:`https://m.media-amazon.com/images/I/51TH3cSL-iS._AC_SX425_.jpg`,
      name:`deku`,
      price:1300
    },
    {
      id:`8`,
      img:`https://m.media-amazon.com/images/I/61E3foqg+lL._AC_SY679_.jpg`,
      name:`zero two`,
      price:270
    },
    {
      id:`9`,
      img:`https://m.media-amazon.com/images/I/51TH3cSL-iS._AC_SX425_.jpg`,
      name:`deku`,
      price:1300
    },
    {
      id:`10`,
      img:`https://m.media-amazon.com/images/I/61E3foqg+lL._AC_SY679_.jpg`,
      name:`zero two`,
      price:270
    },
    {
      id:`11`,
      img:`https://m.media-amazon.com/images/I/51TH3cSL-iS._AC_SX425_.jpg`,
      name:`deku`,
      price:1300
    },
    {
      id:`12`,
      img:`https://m.media-amazon.com/images/I/61E3foqg+lL._AC_SY679_.jpg`,
      name:`zero two`,
      price:270
    },
    {
      id:`13`,
      img:`https://m.media-amazon.com/images/I/51TH3cSL-iS._AC_SX425_.jpg`,
      name:`deku`,
      price:1300
    },
    {
      id:`14`,
      img:`https://m.media-amazon.com/images/I/61E3foqg+lL._AC_SY679_.jpg`,
      name:`zero two`,
      price:270
    },
  ]
  ProductAdd(add:Productos){
    const productobuscado : Productos | undefined = this.products.find(item => item === add)
    const productoIndex = this.products.findIndex(item => item === add)
    if(productobuscado){
      this.shoppingCar.push(productobuscado)
      console.log(this.shoppingCar);
      }
    }
  }

