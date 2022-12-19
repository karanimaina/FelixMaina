import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  alternateStyle: any

  isOpen = false;
  style = 'transform: translateX(-25px);'
  disableStatus = true;


  constructor(private elRef: ElementRef, private route: Router) {
  }


  ngOnInit() {
    this.alternateStyle = (<HTMLElement>this.elRef.nativeElement)
      .querySelectorAll('.alternate-style');
    console.log("on init called")
  }

  toggleMode() {
    this.isOpen = !this.isOpen
  }

  setActiveStyle(color: any) {
    console.log(this.alternateStyle)
    this.alternateStyle.forEach((style:
                                   {
                                     getAttribute: (arg0: string) => any;
                                     removeAttribute: (arg0: string) => void;
                                     setAttribute: (arg0: string, arg1: string) => void;
                                   }) => {
      console.log(style)
      if (color === style.getAttribute("title")) {
        style.removeAttribute("disabled")
      } else {
        style.setAttribute("disabled", "true")

      }
      this.ngOnInit();
    })
  }

}
