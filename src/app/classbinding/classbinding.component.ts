import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {

isSelected= true;
  onclick(){
    console.log("click");
    this.isSelected = !this.isSelected;

  }
  islike = false;
  count = 0;
  onDblCick(){
    this.islike =!this.islike;
    this.count =+1;
    
  }


  constructor() { }

  ngOnInit() {
  }

}
//f2 click change the same value.

