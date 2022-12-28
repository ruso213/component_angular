import { Component,Input , Output , EventEmitter, OnInit , OnDestroy, OnChanges, SimpleChange, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent {
  imge:string = ``
  @Input() 
  set changeImg(newImg:string){
    this.imge = newImg
    console.log(newImg);
    this.changertef.detectChanges()
    
  }
  
  constructor(private changertef:ChangeDetectorRef){

  }
  counter = 0
  counterFn : number | undefined;
  @Output() loaded = new EventEmitter<string>()
  imgDefault:string  = `https://www.w3schools.com/howto/img_avatar2.png`
  imgError(){
    this.imge = this.imgDefault
  }
  ngOnChanges(evt: SimpleChange){
    console.log(evt);
    
  }
  ImgLoaded(){
    console.log(`si cargo`);
    this.loaded.emit(this.imge)
  }
  ngOnInit(){
    /* this.counterFn = window.setInterval(()=>{
      this.counter += 1;
      console.log(`counter`);
      
    }, 1000) */
  }
  ngOnDestroy(){
    console.log(`on destrtoy`);
    
    window.clearInterval(this.counterFn)
  }
}
