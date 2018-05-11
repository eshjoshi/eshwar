import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-git-hub-profile',
  templateUrl: './git-hub-profile.component.html',
  styleUrls: ['./git-hub-profile.component.css']
})
export class GitHubProfileComponent implements OnInit,OnDestroy {

  constructor(private router:ActivatedRoute,private route:Router) { }

  ngOnInit() {
    // this.router.paramMap.subscribe(params=>{
    //   let id = params.get('id');
    //   let username = params.get('login');
    //   console.log(id);
    //   console.log(username);
    // });
    console.log('onInit');
  }
  submit(){
    this.route.navigate(['/followers'],{
      queryParams:{page:1,order:'latest'}
    });
  }
  ngOnDestroy(){
    console.log('destroy');
  }

}
