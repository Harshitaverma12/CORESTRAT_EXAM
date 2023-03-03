import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-invite-mail',
  templateUrl: './invite-mail.component.html',
  styleUrls: ['./invite-mail.component.scss']
})


export class InviteMailComponent implements OnInit {
  settings: FormGroup;
    constructor(fb: FormBuilder ,private examservice: ExamService) {
      this.settings = fb.group({
        to: ["", Validators.required],
         subject: ["", Validators.required],
        body: ["", Validators.required],
    });
    }
  
    ngOnInit(): void {
      this.examservice.sendactivateSideNav(true);
    }
  
  }
  
