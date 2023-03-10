import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HelpSupportComponent } from './help-support/help-support.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { StudentLoginComponent } from './student-login/student-login.component';
import { InstructionComponent } from './instructions/instructions.component';
import { ExaminationComponent } from './examination/examination.component';
import { ResultComponent } from './result/result.component'
import { PerformanceComponent } from './performance/performance.component'
import { PapersComponent } from './papers/papers.component'
import { AdminSettingComponent } from './admin-setting/admin-setting.component'
import { SidenavComponent } from './sidenav/sidenav.component'
import { InviteMailComponent } from './invite-mail/invite-mail.component'
import { StudentSettingComponent } from './student-setting/student-setting.component'
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component'
import { LoadingPageComponent } from './loading-page/loading-page.component'
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component'
import { HeaderComponent } from './header/header.component'

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'help', component: HelpSupportComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'student-login', component: StudentLoginComponent },
  { path: 'instructions', component: InstructionComponent },
  { path: 'examination', component: ExaminationComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'result', component: ResultComponent },
  { path: 'papers', component: PapersComponent },
  { path: 'performance', component: PerformanceComponent },
  { path: 'admin-setting', component: AdminSettingComponent },
  { path: 'side-nav', component: SidenavComponent },
  { path: 'invite-mail', component: InviteMailComponent },
  { path: 'student-setting', component: StudentSettingComponent },
  { path: 'student-dashboard', component: StudentDashboardComponent },
  { path: 'loading-page', component: LoadingPageComponent },
  { path: 'admin-dashboard', component: AdminDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
