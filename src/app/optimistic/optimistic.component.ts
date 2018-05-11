import { Component, OnInit } from '@angular/core';
import { OptimisticService } from '../common/optimistic.service';
import { AppError } from '../common/error-apperror';
import { NotFoundError } from '../common/error.notfound';
import { BadInputError } from '../common/error.badinput';

@Component({
  selector: 'app-optimistic',
  templateUrl: './optimistic.component.html',
  styleUrls: ['./optimistic.component.css']
})
export class OptimisticComponent implements OnInit {

  posts:any[];
  constructor(private service:OptimisticService) { 
    this.getPosts();
  }

  getPosts(){
    this.service.getAll().subscribe( x => this.posts = x);
  }
  
  createPost(input:HTMLInputElement){
    let post={title:input.value};
    this.posts.splice(0,0,post);
    this.service.create(post).
      subscribe(
        x =>{
        post['id'] = x.id;
        
      },
      (error : AppError)=>{
        this.posts.splice(0,1)
        if (error instanceof BadInputError){
          alert('BadInput error')
        } else throw error;
        
    });
  }

  updatePosts(post){
       this.service.update(post)
    .subscribe(
      x=>{
      console.log(x);
    },
    (error : AppError)=>{
      if (error instanceof NotFoundError){
        alert('404-Not found')
      } else throw error;
  });
  }

deletePosts(post){
  let index = this.posts.indexOf(post); 
    this.posts.splice(index,1);
  this.service.delete(post.id).subscribe(
    x=>{
    
    console.log(x);
    console.log(index);
    },
    (error : AppError)=>{
      this.posts.splice(index,0,post);
      if (error instanceof NotFoundError){
        alert('404 not found error')
      } else  throw error; 
      
  });

}
  ngOnInit() {
  }

}
