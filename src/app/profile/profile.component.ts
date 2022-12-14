import {Component, OnInit} from '@angular/core';
import Typed from 'typed.js';
import {Router} from "@angular/router";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent  implements OnInit{

  constructor(private router :Router) {
  }

  ngOnInit(): void {
      let options = {
        strings:["Application Developer","web Designer","Web Developer"],
        typeSpeed:100,
        BackSpeed:60,
        loop:true
      }
      const  typed = new Typed('.typing',options)

    }

  goToRegister() {
    console.log("image clicked")
    this.router.navigate(["/register"])
  }
}
