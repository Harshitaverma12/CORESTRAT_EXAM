import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamService } from '../exam.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  sideBarOpen = true;
  isAdmin: boolean = false;

  constructor(private examservice: ExamService,private router: Router) { }

  ngOnInit(): void {
       this.examservice.logoutStatus.subscribe((event: string) => {
       if (event == "admin")
       {
         this.isAdmin = true;
      }
       
     });
     this.examservice.logoutStatus.subscribe((event: string) => {
       if (event == "student")
       {
         this.isAdmin = false;
      }
       
  });
    
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  logout() {
  this.examservice.sendLogout("logout");
 this.router.navigate(['/welcome']);
  }
}

