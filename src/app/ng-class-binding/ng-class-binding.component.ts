import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class-binding',
  templateUrl: './ng-class-binding.component.html',
  styleUrls: ['./ng-class-binding.component.css']
})
export class NgClassBindingComponent implements OnInit {

isSelected= true;
  onclick(){
    console.log("click");
    this.isSelected = !this.isSelected;

  }
  constructor() { }

  ngOnInit() {
  }

}
