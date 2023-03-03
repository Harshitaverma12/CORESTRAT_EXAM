import { Component, OnInit } from '@angular/core';
import { ExamService } from '../exam.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  sideBarOpen = true;
  selected: any = new Date();

}