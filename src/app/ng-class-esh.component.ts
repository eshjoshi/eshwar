import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-esh',
  templateUrl: './ng-class-esh.component.html',
  styleUrls: ['./ng-class-esh.component.css']
})
export class NgClassEshComponent implements OnInit {
  // stars = [1,2,3];
  isCheck = [false,false,false]
 
  constructor() { }
  
onCheck(index){
  for(let i = 0; i<= this.isCheck.length; i++){
  if(index === i){
  console.log(this.isCheck[index]);
    this.isCheck[i] = !this.isCheck[i]; 
    this.isCheck[index-1] = true;
    this.isCheck[index-2] = true;

   // this.isCheck[1]  = false;   
    //this.isCheck[2]  = false; 
  }
 else{
     this.isCheck[i]  = false; 
     this.isCheck[i]  = false;
 }

// } else if(index ===  1 ){
//     console.log(this.isCheck[1] );
//     this.isCheck[0]  = true; 
//     this.isCheck[1]  = !this.isCheck[1] ; 
//     this.isCheck[2]  = false; 
// }
// else if(index === 2){
//        console.log(this.isCheck[2] );
//     this.isCheck[0]  = true; 
//     this.isCheck[1]  = true; 
//     this.isCheck[2]  = !this.isCheck[2] ; 

// }
  }

}


// onCheck(index){
// if(index === 0){
//   console.log(this.isCheck[0]);
//     this.isCheck[0] = !this.isCheck[0]; 
//     this.isCheck[1]  = false; 
//     this.isCheck[2]  = false; 
// } else if(index ===  1 ){
//     console.log(this.isCheck[1] );
//     this.isCheck[0]  = true; 
//     this.isCheck[1]  = !this.isCheck[1] ; 
//     this.isCheck[2]  = false; 
// }
// else if(index === 2){
//        console.log(this.isCheck[2] );
//     this.isCheck[0]  = true; 
//     this.isCheck[1]  = true; 
//     this.isCheck[2]  = !this.isCheck[2] ; 

// }
// }

// onCheck2(){
//     console.log(this.isCheck2);
//      this.isCheck1 = true; 
//     this.isCheck2 = !this.isCheck2; 
//     this.isCheck3 = false; 
// }
// onCheck3(){
//     console.log(this.isCheck3);
//     this.isCheck1 = true; 
//     this.isCheck2 = true; 
//     this.isCheck3 = !this.isCheck3; 
// }


// onCheck(i) {
//   let name = i; // name is a local variable created by init
//   function displayName() { // displayName() is the inner function, a closure
//     console.log(i); // use variable declared in the parent function 
//     console.log(this.star);
//     if(i === this.star)
//     this.isCheck = true;   
//   }
//   displayName();    
// }


//     check(starIndex){
//     for(let x=0; x<=this.stars.length; x++){
//      let index = this.stars.indexOf(x);
//      if(starIndex === index ){
//         this.onCheck(index);
//      }
    
//        }
//     }
//  onCheck(starIndex){
 
//   // this.isCheck0 =true;
//   // this.isCheck = true;
//      console.log(starIndex);
//      console.log("click on" + starIndex + "check");
//      this.pic = "click" + starIndex;
//      console.log(this.pic);

//     //  if(this.pic == 'click1'){
//     //   this.kt = "on"+starIndex;
//     //  }
  
//   }



 
  ngOnInit() {


  }

}
