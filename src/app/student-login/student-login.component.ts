import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.scss']
})
  
export class StudentLoginComponent implements OnInit {
  isLogin: boolean = true;

  studentLogin: FormGroup;
  studentRegistered: FormGroup;
  constructor(fb: FormBuilder,private examservice: ExamService,private router: Router) {
     this.studentLogin = fb.group({
       name: ["", Validators.required],
       password: ["", Validators.required],
     });
    this.studentRegistered = fb.group({
      email: ["", Validators.required],
       name: ["", Validators.required],
      password: ["", Validators.required],
        confirm_password: ["", Validators.required],
        });
   }

  ngOnInit(): void {
     this.examservice.sendEventDetail(true)
  }
onSubmitLogin() {
  // TODO: Use EventEmitter with form value
  console.log(this.studentLogin.value);
  this.examservice.sendLogout("student");
  this.router.navigate(['/dashboard']);
}
  onSubmitRegistration() {
  // TODO: Use EventEmitter with form value
    console.log(this.studentRegistered.value);
    this.examservice.sendLogout("student");
     this.router.navigate(['/dashboard']);
}
  register()
  {
    this.isLogin = !this.isLogin;
    console.log("Register");
    
  }
}
