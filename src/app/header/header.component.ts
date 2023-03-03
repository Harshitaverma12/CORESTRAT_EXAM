import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ExamService } from '../exam.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  isEnabled: boolean = false;
  LoggedIn: boolean = false;
  isAdmin: boolean = false;
  
  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router,private examservice: ExamService ) {}

  ngOnInit(): void {
     this.examservice.eventDetailSubject.subscribe((event: boolean) => {
       console.log("I am event", event);
       this.isEnabled = true;
       this.LoggedIn = false;
     });
    this.examservice.activateSideNav.subscribe((event: boolean) => {
       this.isEnabled = false;
       this.LoggedIn = true;
       
    });
     this.examservice.logoutStatus.subscribe((event: string) => {
       if (event == "logout")
       {
          this.toggleSidebarForMe.emit();
      }
       
     });
     this.examservice.logoutStatus.subscribe((event: string) => {
       if (event == "admin")
       {
         this.isAdmin = true;
          this.toggleSidebarForMe.emit();
      }
       
     });
     this.examservice.logoutStatus.subscribe((event: string) => {
       if (event == "student")
       {
         this.isAdmin = false;
          this.toggleSidebarForMe.emit();
      }
       
  });
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }
 
}
