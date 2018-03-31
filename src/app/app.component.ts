import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isSelected = true;
  count = 10;
  isUpDisable = false;
  isDownDisable = false;
 
  onDownEvent($event){
    console.log("Clickd event initiated"+ $event);
  }
}
