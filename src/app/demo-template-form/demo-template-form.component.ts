import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-template-form',
  templateUrl: './demo-template-form.component.html',
  styleUrls: ['./demo-template-form.component.css']
})
export class DemoTemplateFormComponent implements OnInit {
log(email){
  console.log(email);
}
states =["Maharashtra","Rajastan", "Panjab","keral","andraPradesh","madyapradsh","UP","Tamilnadu"]

genders =[
  {id:1,name:"Male"},
  {id:2,name:"Female"}
]
  constructor() { }



  ngOnInit() {
  }

}
