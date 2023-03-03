import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent implements OnInit {
  contact: FormGroup;
    constructor(fb: FormBuilder, private examservice: ExamService) {
      this.contact = fb.group({
         name: ["", Validators.required],
        email: ["", Validators.required],
        message: ["", Validators.required],
       });}
  
    ngOnInit(): void {
      this.examservice.sendEventDetail(true)
    }
  
  }
  
