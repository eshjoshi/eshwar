import { Component, OnInit } from '@angular/core';
import { GithubFollowersService } from '../common/github-followers.service';
import {Router, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

  followers: any[];
  constructor(private route:ActivatedRoute,private service:GithubFollowersService) { 
    // this.getFollowers();
  }
  // getFollowers(){
  //   this.service.getAll().subscribe(x=>this.followers = x );
  // }
// submit(){
  
// }
  ngOnInit() {
    // this.route.paramMap.subscribe(param =>{
    // //
    // });

    // this.route.queryParamMap.subscribe(param =>{
    //   let page = param.get('page');
    //   let order = param.get('order');

    //   console.log(page,order);
     
    // });
   Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ]).switchMap(combined=>{
      let id =  combined[0].get('id');
     let username = combined[0].get('username');

     let page = combined[1].get('page');
     let order = combined[1].get('order');
     console.log('id and username',id,username);
     console.log('order and page',order,page);
     return this.service.getAll();
    }).
    subscribe(followers =>{
      this.followers = followers;
      // console.log(this.followers);
     
    });
   
  }

}
