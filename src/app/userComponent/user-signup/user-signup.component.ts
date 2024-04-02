import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
 
@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrl: './user-signup.component.css'
})
export class UserSignupComponent implements OnInit{

  SignupForm!: FormGroup
  formData!: FormData

  constructor(private formBuilder: FormBuilder, private service: UserServiceService, private route: Router, private snackBar: MatSnackBar){}

  ngOnInit(): void {
      this.SignupForm = this.formBuilder.group({
        userName:['', [Validators.required, Validators.minLength(4)]],
        email:['', [Validators.required, Validators.email]],
        password:[''],
        cPassword:['']
      })
  }
  onSignup() {
        if(this.SignupForm.valid) {
          if(this.SignupForm.value.password == this.SignupForm.value.cPassword) {
            this.formData = this.SignupForm.value
            console.log('ang2',this.formData);
            this.service.signupSubmit(this.formData).subscribe((value:any)=>{
             if(value.success == 'created') {  
              this.route.navigate(['/'])
             }
            })
          } else {
            this.openSnackBar('Password is not matching', 'Close');
          }
        }   
        
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000, 
      horizontalPosition: 'center', 
      verticalPosition: 'top' 
    });
  }
}
