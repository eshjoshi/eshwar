import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { HttpService } from '../common/httpService';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts:any[];
  // private url='https://jsonplaceholder.typicode.com/posts';


  
  // constructor(private http:Http) { 
  //  this.getPosts();
  // }
//http for inner code

constructor(private service: HttpService){
this.getPosts();
}


  // getPosts(){
  //   this.http.get(this.url)
  //     .subscribe(res =>{
  //        this.posts = res.json();
  //        console.log(this.posts);
  //     });
  // }

// get using service  
  getPosts(){
    this.service.getAll()
      .subscribe( x => this.posts = x
        // res =>{
        //  this.posts = res.json();
        //  console.log(this.posts);
        
        //  localStorage.setItem('person', JSON.stringify(this.posts));
        //  sessionStorage.setItem('noyt',JSON.stringify(this.posts));
  //}
  ,
      (error : Response)=>{
        if (error.status === 404){
          alert('404-Not found')
        } else {

          alert('something went wrong');
          console.log(error);
        }
          
        
    });
  }

  // createPost(input:HTMLInputElement){
  //   let post={title:input.value};
  //   this.http.post(this.url,JSON.stringify(post)).
  //     subscribe(res =>{
  //       post['id'] = res.json().id;
  //       this.posts.splice(0,0,post);
  //       console.log(res);
  //     });
  // }

//Service using post

  createPost(input:HTMLInputElement){
    let post={title:input.value};
    this.service.create(post).
      subscribe(
        x =>{
        post['id'] = x.id;
        this.posts.splice(0,0,post);
        console.log(x);
      },
      (error : Response)=>{
        if (error.status === 404){
          alert('404-Not found')
        } else {

          alert('something went wrong');
          console.log(error);
        }
          
        
    });
  }

  // updatePosts(post){
  //   this.http.patch(this.url+'/'+post.id,JSON.stringify({title:"Arun"}))
  //   .subscribe(res=>{
  //     console.log(res.json());
  //   })
  // }

  updatePosts(post){
       this.service.update(post)
    .subscribe(
      x=>{
      console.log(x);
    },
    (error : Response)=>{
      if (error.status === 404){
        alert('404-Not found')
      } else {

        alert('something went wrong');
        console.log(error);
      }
        
      
  });
  }





//   deletePosts(post){
//     this.http.delete(this.url+'/'+post.id).subscribe(res=>{
//       let index = this.posts.indexOf(post); 
//        this.posts.splice(index,1);
//       console.log(res);
//       console.log(index);
//  })
//   }


//delete using service

deletePosts(post){
  this.service.delete(post.id).subscribe(
    x=>{
    let index = this.posts.indexOf(post); 
    this.posts.splice(index,1);
    console.log(x);
    console.log(index);
    },
    (error : Response)=>{
      if (error.status === 404){
        throw error;
      } else {
        throw error;
      }   
      
  });




}
  ngOnInit() {
  }

}
