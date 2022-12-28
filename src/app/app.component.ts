import { Component, Input , OnDestroy} from '@angular/core';
import { Productos } from './types/product.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toggle= false
  imgParent = {
    url:`https://www.w3schools.com/howto/img_avatar.png`,
    size: `200`
  };
  
  LoadedImg(img:String){
    console.log(`la imagen es `,img);
    
  }

  toggleBtn(){
    this.toggle = !this.toggle
    console.log(`asdfasd`);
    
  }
}
