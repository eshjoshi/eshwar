import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  
   form = new FormGroup({

    username: new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('eshwar')]),
    password: new FormControl('',Validators.required)


  });

  get username(){
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }

  constructor() { }



  ngOnInit() {
  }

}
