import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {DataService} from "../data.service";

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit{
  username!: User;
  repository: any;

  constructor(private requestUser:DataService) {}

  getUser(githubUsername: string){
    this.requestUser.getUserDataRequest(githubUsername).then(
      (Response)=>{
        this.username=this.requestUser.userData;
        console.log(this.username)
      },
      (error)=>{
        console.log(error);
      }
    )
  }


  getRepos(githubUsername: string){
    this.requestUser.getReposDataRequest(githubUsername).then(
      (Response)=>{
        this.repository=this.requestUser.repoData;
      },
      (error)=>{
        console.log(error);
      }
    )
  }



  ngOnInit(): void {
    this.getUser("karanimaina")
    this.getRepos("karanimaina")

  }

}


}
