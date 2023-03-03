import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})

export class AdminLoginComponent implements OnInit {
  adminLogin: FormGroup;
    constructor(fb: FormBuilder, private examservice: ExamService,private router: Router ) {
      this.adminLogin = fb.group({
        name: ["", Validators.required],
        password: ["", Validators.required],
      });
    }
  
    ngOnInit(): void {
      this.examservice.sendEventDetail(true);
    }
  onSubmitLogin() {
    // TODO: Use EventEmitter with form value
    console.log(this.adminLogin.value);
    this.examservice.sendLogout("admin");
     this.router.navigate(['/admin-dashboard']);
  }
  }
