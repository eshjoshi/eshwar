import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-intercomm',
  templateUrl: './intercomm.component.html',
  styleUrls: ['./intercomm.component.css']
})
export class IntercommComponent implements OnInit {

  @Input() isSelected;
  @Input() count = 0;
  @Input('favarite') isDownDisable = false;
  @Input() isUpDisable = false;
  @Output() clickEvent = new EventEmitter();
 

   onclick(){
    console.log("click");
    this.isSelected = !this.isSelected;
     this.count += this.isSelected ? -1 :1

   }
  onDown(){
     this.count--;
     //this.diabled.readOnly = true;
     this.isDownDisable = true;
     this.isUpDisable = false;
     this.clickEvent.emit( this.isDownDisable);
  }
  onUp(){
    
    this.count++;
    // this.isreadonly = true;
    this.isUpDisable = true;
    this.isDownDisable =false;
    this.clickEvent.emit( this.isDownDisable);
   

  }
  
 

  constructor() { }

  ngOnInit() {
  }

}
