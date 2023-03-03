
import { Component, OnInit,NgZone} from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.scss']
})

export class LoadingPageComponent implements OnInit {
  percent: number = 0;
  get style() {
    return "width:" + this.percent + "%";
  }
  constructor(private router: Router, public zone: NgZone) { }

  ngOnInit(): void {
    timer(200, 40).subscribe(d => {
      if (d)
      {
        if (this.percent >= 100)
        {
         this.zone.run(() => { this.router.navigate(['/welcome']); }); 
        }
        else {
          this.percent += 1;
        }
        }
    })
//     setTimeout(() => {
//     this.zone.run(() => { this.router.navigate(['/dashboard']); }); 
// }, 3000);
  }
}

