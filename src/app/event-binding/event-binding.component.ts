import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  
  // event databinding
  // onclick(email){
  //   console.log("yes click"+ email.value);
  // }
  //template variable in event data binding
  //   onclick(email){
  //   console.log("yes click"+ email.value);
  // }

  //properties binding
//email = "eshwarjoshi3@gmail.com";

// event keycode logic
//  onclick($event){
//    if($event.keyCode ===13){
// console.log("yes enter is press click"+ this.email + $event.keyCode );
//    }
    
//   }
//   ondblclick(){
//       console.log("yes dbdl click"+ this.email);
//   }
//   mouseout(){
//      console.log("yes mouseout click"+ this.email);
//   }


// two way databinding traditional way
// email= "eahwar@gmalcom"
//    onclick($event){
//      console.log("yes click"+ this.email);
//   }

//two way data binding angular
// email= "eahwar@gmalcom"
//    onclick($event){
//   //inner function
//   //   this.email = $event.target.value;
//      console.log("yes click"+ this.email);
//   }

 email= "eahwar@gmalcom";
   onclick(){
     console.log("yes click"+ this.email);
  }


  constructor() { }

  ngOnInit() {
  }

}
