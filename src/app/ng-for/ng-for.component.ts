import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

courses = [
  {
    id:1,
    name:"Java"
  },

  {
    id:2,
    name:"Anularg"
  },

  {
    id:3,
    name:"Javascript"
  },

  {
    id:4,
    name:"html"
  }
]
  constructor() { }

  ngOnInit() {
  }

}
