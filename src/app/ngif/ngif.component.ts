import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif',
  templateUrl: './ngif.component.html',
  styleUrls: ['./ngif.component.css']
})
export class NgifComponent implements OnInit {
couses = [ 1,2,3];

isCouses(){
  if (this.couses.length > 0) {
    return true;
  
  } else {
    return false;
  }
}


  constructor() { }

  ngOnInit() {
  }

}
