import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-pipe',
  templateUrl: './angular-pipe.component.html',
  styleUrls: ['./angular-pipe.component.css']
})
export class AngularPipeComponent implements OnInit {
    employee = {
      Name:"eshwar",
      Doj: new Date(),   // yyyy/mm/dd
      designation: "UI Developer",
      Address:"jfdfj djfkdsf jfdnksdf HJSHGFF jDDD of JBnjn",
      Salary: 45.000096 
    }

   
  constructor() {
    let a =  this.employee.Name;
  console.log(a.toUpperCase());
   }

  ngOnInit() {
  }

}
