import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent implements OnInit{

  loginForm!: FormGroup

  constructor(private service: UserServiceService, private formBuilder: FormBuilder, private route: Router){}

  ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        email:['', [Validators.required, Validators.email]],
        password:['', Validators.required]
      })
  }

  onLogin(){
    console.log(this.loginForm.value);
    this.service.loginSubmit(this.loginForm.value).subscribe((value:any)=>{
      if(value == 'loginSuccess') {
        this.route.navigate(['/signUp2'])
      }
    })    
  }
}
