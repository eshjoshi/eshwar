import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {
isclick = true;
  onclick(){
    console.log("click");
    this.isclick = !this.isclick;
  }
  constructor() { }

  ngOnInit() {
  }

}
