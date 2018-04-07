import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserValidation } from '../common/username';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  form: FormGroup;
  constructor( private sub:FormBuilder) {

    this.form = this.sub.group({
      oldPassword: ['',Validators.required,UserValidation.validOldPassword],
      newPassword: ['',Validators.required],
      confirmPassword: ['',Validators.required]
    },{
      validator: UserValidation.passwordsShouldMatch
    });
   }

   get oldPassword(){
     return this.form.get('oldPassword');
   }
   get newPassword(){
     return this.form.get('newPassword');
   }
   get confirmPassword(){
     return this.form.get('confirmPassword');
   }

  ngOnInit() {
  }

}
