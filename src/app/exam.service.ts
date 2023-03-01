import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  eventDetailSubject = new Subject<any>();
  activateSideNav = new Subject<any>();
  logoutStatus = new Subject<any>();
  constructor() { }
    sendEventDetail(event: boolean) {
    this.eventDetailSubject.next(event);
  }

  getEventDetail(): Observable<boolean> {
    return this.eventDetailSubject.asObservable();
  }
   sendactivateSideNav(event1: boolean) {
    this.activateSideNav.next(event1);
  }

  getactivateSideNav(): Observable<boolean> {
    return this.activateSideNav.asObservable();
  }
     sendLogout(status: string) {
    this.logoutStatus.next(status);
  }

  getLogout(): Observable<boolean> {
    return this.logoutStatus.asObservable();
  }
}

