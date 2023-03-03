import { Component, OnInit } from '@angular/core';
import { ExamService } from '../exam.service';
export interface PeriodicElement {
  name: string;
  position: number;
  max_marks: string;
  marks_obtained: string;
  marksinpercentage: string;
  tabCount: string;
  videolink: string;
  status: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Somya Abichandani', max_marks:"10", marks_obtained: '9', marksinpercentage:"90%",tabCount:"1",videolink:"https://www.corestrat.ai/somya", status:"Selected"},
  {position: 2, name: 'Varun', max_marks: "10", marks_obtained: '8',marksinpercentage:"80%",tabCount:"3",videolink:"https://www.corestrat.ai/varun", status:"Selected"},
  {position: 3, name: 'Rupal', max_marks: "10", marks_obtained: '5',marksinpercentage:"50%",tabCount:"5",videolink:"https://www.corestrat.ai/rupal", status:"Selected"},
  {position: 4, name: 'Amisha', max_marks: "10", marks_obtained: '4',marksinpercentage:"40%",tabCount:"10",videolink:"https://www.corestrat.ai/amisha", status:"Rejected"},
];

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss']
})


export class PerformanceComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'max_marks', 'marks_obtained','marksinpercentage', 'marks_obtained', 'videolink', 'status'];
   dataSource = ELEMENT_DATA;
   selected = 'all';
 
   constructor(private examservice: ExamService) { }
 
   ngOnInit(): void {
     this.examservice.sendactivateSideNav(true);
   }
   changeData(e: any) {
     this. dataSource = ELEMENT_DATA;
     console.log("data changed", +e);
     var arr: PeriodicElement[] = [];
 
 this.dataSource.forEach(i=> {
   if (i.status.toLowerCase() == e)
   {
     arr.push(i);
     this.dataSource = arr;
   }
 });
     
 }
 }
