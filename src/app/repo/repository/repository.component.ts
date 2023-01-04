import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../api/api.service";
import {UserGithub} from "../model/user";


@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit{
  user:UserGithub

  repo:any
  constructor(private api:ApiService) {}

  ngOnInit() {
    this.api.getUserRepo().subscribe((res: any) => {
      this.repo = res
      console.log(res)
    })

    this.api.getUserData().subscribe((res: any) => {
      this.user = res
      console.log(res)
    })
  }



}
