import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  navBar= false
  carBar=false
  @Output() sendTrueFalse = new EventEmitter<boolean>
  toggleBar(){
    this.navBar = !this.navBar
    this.sendTrueFalse.emit(this.navBar)
  }
  toggleCar(){
    this.carBar = !this.carBar
  }
}
