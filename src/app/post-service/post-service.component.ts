import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-post-service',
  templateUrl: './post-service.component.html',
  styleUrls: ['./post-service.component.css']
})
export class PostServiceComponent implements OnInit {

  posts:any[];
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http:Http) {
    this.getPost();
   }

   getPost(){
    this.http.get(this.url).subscribe(res=>{
      this.posts = res.json();
      console.log(res);
    });
   }

   createPost(input:HTMLInputElement){
     let post = {title : input.value};
     this.http.post(this.url,JSON.stringify(post)).subscribe(res=>{
      post['id'] = res.json().id;
      this.posts.splice(0,0,post);
     })
   }

  ngOnInit() {
  }

}
