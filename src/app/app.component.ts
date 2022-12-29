import { Component, Input , OnDestroy, EventEmitter, Output} from '@angular/core';
import { Productos } from './types/product.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggle= false
  tglcar = false
  price = 0
  imgParent = {
    url:`https://www.w3schools.com/howto/img_avatar.png`,
    size: `200`
  };
  
  LoadedImg(img:String){
    console.log(`la imagen es `,img);
    
  }
  eventRecive(event: number){
    this.price = event
    this.tglcar= true
    setTimeout(()=> {
      this.tglcar= false
    },2000)
  }
  toggleBtn(){
    this.toggle = !this.toggle
    console.log(`asdfasd`);
    
  }
}
