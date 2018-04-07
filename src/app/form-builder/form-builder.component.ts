import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

  form: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]

    });
  }
  get username(){return this.form.get('username');}
  get password(){return this.form.get('password');}
}
