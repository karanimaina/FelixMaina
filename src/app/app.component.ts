import {AfterViewInit, Component, ElementRef, Injector} from '@angular/core';
import * as events from "events";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  isOpen = true;
  style= 'transform: translateX(-25px);'


 constructor(private elRef :ElementRef) {}
  toggleMode() {
    this.elRef.nativeElement.getElementsByClassName("style-switcher").classList.toggle("open")
    const styleSwitcherToggle =this.elRef.nativeElement.querySelector(".style-switcher-toggler");
     styleSwitcherToggle.addEventListener("click", () => {
      this.elRef.nativeElement.querySelector(".style-switcher").classList.toggle(this.style);
    })
  }
  // scroll(){
  //   window.addEventListener("scroll",()=>{
  //   if (this.elRef.nativeElement.querySelector(".style-switcher").classList.contains(this.style)) {
  //     this.elRef.nativeElement.querySelector(".style-switcher").classList.remove(this.style)
  //   }})
  // }
 }
