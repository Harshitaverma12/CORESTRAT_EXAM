import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-student-setting',
  templateUrl: './student-setting.component.html',
  styleUrls: ['./student-setting.component.scss']
})


export class StudentSettingComponent implements OnInit {
  studentLogin: FormGroup;
    constructor(private examservice: ExamService,fb: FormBuilder,) {
        this.studentLogin = fb.group({
         name: ["Somya Abichandani", Validators.required],
         password: ["*******", Validators.required],
       });
    }
  
    ngOnInit(): void {
      this.examservice.sendactivateSideNav(true);
    }
  
  }
