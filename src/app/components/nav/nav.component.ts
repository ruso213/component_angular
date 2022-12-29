import { Component, Output, EventEmitter, Input,OnInit } from '@angular/core';
import { StoreService  } from "../../service/store.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  constructor (
    private storeservie : StoreService
  ){}
  counterProducts = 0
  @Input() price = 0
  navBar= false
  @Input() carBar=false
  @Output() sendTrueFalse = new EventEmitter<boolean>
  ngOnInit(){
    this.storeservie.myCart$.subscribe(prod =>{
      this.counterProducts = prod.length
    })
  }
  toggleBar(){
    this.navBar = !this.navBar
    this.sendTrueFalse.emit(this.navBar)
  }
  toggleCar(){
    this.carBar = !this.carBar

  }
}
