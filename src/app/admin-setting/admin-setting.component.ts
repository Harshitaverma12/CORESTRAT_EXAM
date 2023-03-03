import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExamService } from '../exam.service'

@Component({
  selector: 'app-admin-setting',
  templateUrl: './admin-setting.component.html',
  styleUrls: ['./admin-setting.component.scss']
})


export class AdminSettingComponent implements OnInit {
  settings: FormGroup;
  settingsselection: FormGroup;
  settingsrejection: FormGroup;
  constructor(fb: FormBuilder,private examservice: ExamService) { 
    this.settings = fb.group({
       tabs: ["", Validators.required],
      email: ["", Validators.required],
    });
        this.settingsselection = fb.group({
       subject: ["", Validators.required],
      body: ["", Validators.required],
        });
       this.settingsrejection = fb.group({
       subject: ["", Validators.required],
      body: ["", Validators.required],
    });
  }
  ngOnInit(): void {
      this.examservice.sendactivateSideNav(true);
  }

}
