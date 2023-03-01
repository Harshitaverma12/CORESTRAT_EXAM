import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})

export class InstructionComponent implements OnInit {
  video: boolean = false;
  terms: boolean = false;
  buttonDisabled: boolean = true;
  constructor(private examservice: ExamService,private router: Router) { }

  ngOnInit(): void {
    // this.examservice.sendEventDetail(true);
    this.examservice.sendactivateSideNav(true);
  }
  updateConditions() {
    if (this.video == true && this.terms == true)
    {
      this.buttonDisabled = false;
    }

  }
startExam(){
     this.router.navigate(['/examination']);  
}
}
