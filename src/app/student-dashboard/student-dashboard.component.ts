import { Component, OnInit } from '@angular/core';
import { ExamService } from '../exam.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})


export class StudentDashboardComponent implements OnInit {
  sideBarOpen = true;
  selected: any = new Date();
  constructor(private examservice: ExamService) { }

  ngOnInit(): void {
    // console.log(this.header.isEnabled);
    // this.header.isEnabled = true;
    // console.log(this.header.isEnabled);
    // // this.examservice.sendEventDetail(true);
    this.examservice.sendactivateSideNav(true);
   
  }
 ngAfterViewInit() {
     
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}