import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-examination',
  templateUrl: './examination.component.html',
  styleUrls: ['./examination.component.scss']
})
export class ExaminationComponent implements OnInit {
display: any;
  public timerInterval: any;
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  max = 60;
  value = 0;
  minute = 0;
  secondsTimer = 0;
  minutesTimer = 0;
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
{
"question": "When was Mahatma Gandhi born?",
"answers": [
"October 2, 1869",
"December 15, 1872",
"July 18, 1918",
"January 15, 1929"
],
  "correctIndex": 0

},
{
"question": "How far is the moon from Earth?",
"answers": [
"7,918 miles (12,742 km)",
"86,881 miles (139,822 km)",
"238,400 miles (384,400 km)",
"35,980,000 miles (57,910,000 km)"
],
"correctIndex": 2
},
{
"question": "What is 65 times 52?",
"answers": [
"117",
"3120",
"3380",
"3520"
],
"correctIndex": 2
},
{
"question": "How tall is Mount Everest?",
"answers": [
"6,683 ft (2,037 m)",
"7,918 ft (2,413 m)",
"19,341 ft (5,895 m)",
"29,029 ft (8,847 m)"
],
"correctIndex": 3
    },

]
}
  currentQuestion: any=this.Exam.questions[0];
  constructor(private examservice: ExamService) { }

  ngOnInit(): void {
    console.log(this.Exam);
    this.examservice.sendactivateSideNav(true);
    this.timer(30);
  }
  questionNavigate(i: any) {
    console.log(this.Exam.questions[i]);
    this.currentQuestion = this.Exam.questions[i];

  }
  timer(minute:any) {
    // let minute = 1;
    let seconds: number = minute * 60;
    let textSec: any = '0';
    let statSec: number = 60;

    const prefix = minute < 10 ? '0' : '';

    this.timerInterval = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = '0' + statSec;
      } else textSec = statSec;

      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;
      this.minute = Number(Math.floor(seconds / 60));
      this.minutesTimer = this.minute;
      this.minute = this.minute * 100 / 30;
      this.value = Number(textSec);
      this.secondsTimer = Number(textSec);
      this.value = this.value * 100 / 60;
      

      if (seconds == 0) {
        console.log('finished');
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }
  finishExam() {
    console.log("finish");
  }
}

