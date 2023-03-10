import { Component } from '@angular/core';
import { ExamService } from '../exam.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private examservice: ExamService) { }

  ngOnInit(): void {
    this.examservice.sendEventDetail(true)
  }
}
