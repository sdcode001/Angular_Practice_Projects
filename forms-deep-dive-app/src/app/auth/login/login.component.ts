import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { mustContainQuestionMark } from './login.utils';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [ReactiveFormsModule]
})
export class LoginComponent {

  form = new FormGroup({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required]
    }),
    password: new FormControl('', {
      validators: [Validators.minLength(5), Validators.required, mustContainQuestionMark]
    })
  })
  

  submitHandler(){
    if(this.form.invalid){
      return
    }
    console.log(this.form)
  }

}
