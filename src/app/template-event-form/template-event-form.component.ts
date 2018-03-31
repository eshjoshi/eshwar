import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-event-form',
  templateUrl: './template-event-form.component.html',
  styleUrls: ['./template-event-form.component.css']
})
export class TemplateEventFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

log(firtname){
 console.log(firtname);
}
data;
login(form){
  console.log(form);

this.data=  {
    name: form.form.value.firtName,
    comment: form.form.value.comment
  }
  console.log(this.data);
 this.showdata(this.data);

}

showdata(getData){
  console.log("inside" +getData);
}
  


}
