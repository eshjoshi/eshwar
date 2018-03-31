import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-swich',
  templateUrl: './ng-swich.component.html',
  styleUrls: ['./ng-swich.component.css']
})
export class NgSwichComponent implements OnInit {
 color = "red";
 onclick(color){
   if(this.color="red"){
     this.color = color;
   }
   else if(this.color = "green"){
     this.color = color;
   }
 }
  constructor() { }

  ngOnInit() {
  }

}
