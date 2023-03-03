import { Component, OnInit } from '@angular/core';
import { ExamService } from '../exam.service';
export interface PeriodicElement {
  exam_name: string;
  position: number;
  exam_duration: string;
  date: string;
  status: string;
  download: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, exam_name: 'Front End Engineer', exam_duration:"30 Minutes", date: '28-11-2021 10:00', status:"Completed",download:"Download"},
  {position: 2, exam_name: 'Graphic Designer', exam_duration: "30 Minutes", date: '28-11-2021 10:00',status:"Completed",download:"Download"},
  {position: 3, exam_name: 'Backend Developer', exam_duration: "30 Minutes", date: '28-11-2021 10:00',status:"Completed",download:"Download"},
  {position: 4, exam_name: 'Full Stack Developer', exam_duration: "30 Minutes", date: '28-11-2021 10:00',status:"Completed",download:"Download"},
];

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})

export class ResultComponent implements OnInit {
  displayedColumns: string[] = ['position', 'exam_name', 'exam_duration', 'date', 'status','download'];
  dataSource = ELEMENT_DATA;

  constructor(private examservice: ExamService) { }

  ngOnInit(): void {
    this.examservice.sendactivateSideNav(true);
  }

}
