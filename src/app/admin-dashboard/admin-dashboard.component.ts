import { Component, OnInit } from '@angular/core';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})


export class AdminDashboardComponent implements OnInit {

  constructor( private examservice: ExamService) { }

  ngOnInit(): void {
    this.examservice.sendactivateSideNav(true);
  }

}

