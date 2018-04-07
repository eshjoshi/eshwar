import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { UserValidation } from '../common/username';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  
  //  form = new FormGroup({
  //     contact: new FormGroup({
  //       username: new FormControl('',[Validators.required, 
  //         Validators.minLength(3), 
  //         Validators.pattern('eshwar'),
  //         UserValidation.cannotContainSpace],UserValidation.uniqueUserName),
  //       password: new FormControl('',Validators.required)
  //     }),
  //     address: new FormGroup({
  //       pin: new FormControl('', [Validators.required,Validators.minLength(3), Validators.pattern('eshwar')]),
  //       state: new FormControl('',Validators.required)
  //     })

  // });

  form = new FormGroup({
    username: new FormControl('',
      [Validators.required,
      UserValidation.cannotContainSpace],
    UserValidation.uniqueUserName),
    password: new FormControl('',Validators.required)
  });

  log(){
    console.log(this.form);
  }

  get username(){
    return this.form.get('username');
  }

  get password(){
    return this.form.get('password');
  }

  get pin(){
    return this.form.get('address.pin');
  }

  get state(){
    return this.form.get('address.state');
  }

  constructor() { }



  ngOnInit() {
  }

}
