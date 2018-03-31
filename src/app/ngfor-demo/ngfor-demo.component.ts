import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor-demo',
  templateUrl: './ngfor-demo.component.html',
  styleUrls: ['./ngfor-demo.component.css']
})
export class NgforDemoComponent implements OnInit {

  coures ; 

  loadCourse() {
   this.coures= [
    {
      name:'Angular1',
      date:'20-3-2018'
      
    },
      {
      name:'Angular1',
      date:'20-3-2018'
      
    },
     {
      name:'Angular4',
      date:'20-3-2018'
      
    },
      {
      name:'Angular5',
      date:'20-3-2019'
      
    }
  ]
}
trackCourse(course){
 return course ? course.name : undefined;
}
  constructor() { }

  ngOnInit() {
  }

}
