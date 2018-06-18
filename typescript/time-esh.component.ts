import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-time-esh',
  templateUrl: './time-esh.component.html',
  styleUrls: ['./time-esh.component.css']
})
export class TimeEshComponent implements OnInit {

   date2;                        //selected date
   currentTime;                  // currrent date
   diffYear;                    // Differnce Year
   diffDays;                    // Differnce days
   diffHours;                   // Differnce hour
   diffMinite;                  // Differnce minite
   diffSecond;                  // Differnce second


   form = new FormGroup({
     date:new FormControl('Enter Date',[
           Validators.required,
      ]),                                           //Set Date validation
     time:new FormControl('Enter Time', [
             Validators.required,
       ]),                                         //Set Date validation
    comment:new FormControl('Enter comment', [
             Validators.required,
       ])  
    })
  
  get date(){
    return this.form.get('date');                   //get date from view
  }
  get time(){
    return this.form.get('time');                   //get time from view
  }
   get comment(){ 
    return this.form.get('comment');                   //get time from view
  }

  constructor() {}

    log(){
          console.log(this.form);
          console.log(this.form.value);
          console.log(this.form.value.date);
          console.log(this.form.value.time);
          
          let setDate = this.form.value.date;            // get date 
          let setTime = this.form.value.time;            // get time
          console.log( setDate +  ","  +setTime);
          let val =  setDate +  ","  +setTime;           // arrange in one variable
          if(setDate && setTime != "Enter Time"){
            var date2 = new Date(val); 
          }
         // value convert to the date
          console.log("date1:-" + date2);
          this.date2 = date2;
    }
  
  clock(){     
      let currentTime = new Date();
      this.currentTime =  currentTime;   
       if(this.date2){
         this.logic();
       }
   }


   logic(){
      let minutes = 1000 * 60;
      let seconds = minutes / 60;
      let hours = minutes * 60;
      let days = hours * 24;
      let years = days * 365;

    // let diffYear = Math.round(Math.abs((date1.getTime() - currentTime.getTime())/(years)));
       let diffDays = Math.round(Math.abs(( this.currentTime.getTime() - this.date2.getTime())/(days)));
       let diffHours = Math.round(Math.abs(( this.currentTime.getTime() - this.date2.getTime())/(hours)));
       let diffMinite = Math.round(Math.abs(( this.currentTime.getTime() - this.date2.getTime())/(minutes)));
       let diffSecond = Math.round(Math.abs(( this.currentTime.getTime() - this.date2.getTime())/(seconds)));
      
      this.date2 = this.date2;
  // this.diffYear = diffYear;
      this.diffDays = diffDays;
      this.diffHours = diffHours;
      this.diffMinite = diffMinite;
      this.diffSecond = diffSecond;  

      if( this.diffSecond == 0){
        alert("Time UP");
      }
   }



  ngOnInit() {
      setInterval(()=> {
        this.clock();
      }, 1000);  
      }

}
