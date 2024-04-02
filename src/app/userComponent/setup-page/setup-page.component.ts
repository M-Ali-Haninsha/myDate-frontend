import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-setup-page',
  templateUrl: './setup-page.component.html',
  styleUrl: './setup-page.component.css'
})
export class SetupPageComponent implements OnInit{

  firstFormGroup!: FormGroup
  secondFormGroup!: FormGroup
 
  url="/assets/images/img2.jpg"
  firstForm!: FormData

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
      this.firstFormGroup = this.formBuilder.group({
        zodiac:[''],
        chakra:[''],
        sports:[''],
        movies:[''],
        music:[''],
        hobbies:['']
      })

      this.secondFormGroup = this.formBuilder.group({
        about:['']
      })
  }

  onSubmit() {    
    this.firstForm = this.firstFormGroup.value
    console.log(this.firstForm);
    
  }

  
}
