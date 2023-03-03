import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  selector: 'app-papers',
  templateUrl: './papers.component.html',
  styleUrls: ['./papers.component.scss']
})


export class PapersComponent implements OnInit {
  displayedColumns: string[] = ['position', 'exam_name', 'exam_duration', 'date', 'status','download'];
   dataSource = ELEMENT_DATA;
   openDialog1: boolean = false;
   inEdit: boolean = false;
   newQuestion: boolean = false;
   index: any = 0;
   options: string="";
   questionIndex: any;
   inputOpen: boolean = false;
   newPaper: FormGroup;
   Exam={
 "questions": [
 {
 "question": "What is the scientific name of a butterfly?",
 "answers": [
 "Apis ",
 "Coleoptera",
 "Formicidae",
 "Rhopalocera"
 ],
 "correctIndex": 3
 },
 {
 "question": "How hot is the surface of the sun?",
 "answers": [
 "1,233 K",
 "5,778 K",
 "12,130 K",
 "101,300 K"
 ],
 "correctIndex": 1
 },
 {
 "question": "Who are the actors in The Internship?",
 "answers": [
 "Ben Stiller, Jonah Hill",
 "Courteney Cox, Matt LeBlanc",
 "Kaley Cuoco, Jim Parsons",
 "Vince Vaughn, Owen Wilson"
 ],
 "correctIndex": 3
 },
 {
 "question": "What is the capital of Spain?",
 "answers": [
 "Berlin",
 "Buenos Aires",
 "Madrid",
 "San Juan"
 ],
 "correctIndex": 2
 },
 {
 "question": "What are the school colors of the University of Texas at Austin?",
 "answers": [
 "Black, Red",
 "Blue, Orange",
 "White, Burnt Orange",
 "White, Old gold, Gold"
 ],
 "correctIndex": 2
 },
 {
 "question": "What is 70 degrees Fahrenheit in Celsius?",
 "answers": [
 "18.8889",
 "20",
 "21.1111",
 "158"
 ],
 "correctIndex": 2
 },
 
 ]
   }
   currentQuestion: any=this.Exam.questions[0];
   constructor(fb: FormBuilder,private examservice: ExamService) {
     this.newPaper = fb.group({
        name: ["", Validators.required],
        duration: ["", Validators.required],
      });
    }
 
   ngOnInit(): void {
     this.examservice.sendactivateSideNav(true);
   }
   openDialog() {
     this.openDialog1 = true;
   }
   onSubmitPaper() {
     this.inEdit = true;
   }
   questionNavigate(i: any) {
     this.inputOpen = false;
     this.newQuestion = false;
     this.index = i;
     this.questionIndex = i;
     console.log(this.Exam.questions[i]);
     this.currentQuestion = this.Exam.questions[i];
 
     }
   openInput()
   {
     this.inputOpen = true;
     console.log("input Open");
   }
   updateQuestion() {
     if (this.newQuestion == false) {
       this.Exam.questions[this.index] = this.currentQuestion;
     }
     else {
       this.Exam.questions.push(this.currentQuestion);
     }
     this.inputOpen = false;
     //console.log(i);
   }
   addQuestion() {
     this.newQuestion = true;
     this.inputOpen = true;
    var question:any={
 "question": "",
 "answers": [
 "",
 "",
 "",
 ""
 ],
 "correctIndex": 2
     } 
      this.currentQuestion = question;
   }
   valuechange(e: any, i: any) {
     if (this.newQuestion == true) {
       console.log(i);
       var question = this.currentQuestion;
       question.answers[i] = e.value;
       this.currentQuestion= question;
     }
     else {
       this.currentQuestion.answers[i] = e.value;
     }
  }
 }
