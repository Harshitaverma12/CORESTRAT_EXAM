import { Component, OnInit } from '@angular/core';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-help-support',
  templateUrl: './help-support.component.html',
  styleUrls: ['./help-support.component.scss']
})

export class HelpSupportComponent implements OnInit {

  constructor(private examservice: ExamService) { }

  ngOnInit(): void {
    this.examservice.sendEventDetail(true);
  }

}
