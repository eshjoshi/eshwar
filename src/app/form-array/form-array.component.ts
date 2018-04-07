import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

  constructor() { }
  form = new FormGroup({
    usernames: new FormArray([])
  });

  addUserNames(username:HTMLInputElement){
    this.usernames.push(new FormControl(username.value));
    username.value='';
  }
  removeUsername(username){
    let index = this.usernames.controls.indexOf(username);
    this.usernames.removeAt(username);
  }
  get usernames(){
    return this.form.get('usernames') as FormArray;
  }
  ngOnInit() {
  }

}
