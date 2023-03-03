import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HelpSupportComponent } from './help-support/help-support.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MatIconModule } from '@angular/material/icon';
import { StudentLoginComponent } from './student-login/student-login.component';
import { InstructionComponent } from './instructions/instructions.component';
import { ExaminationComponent } from './examination/examination.component';
import { ResultComponent } from './result/result.component';
import { PapersComponent } from './papers/papers.component';
import { PerformanceComponent } from './performance/performance.component';
import { AdminSettingComponent } from './admin-setting/admin-setting.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HeaderComponent } from './header/header.component';
import { InviteMailComponent } from './invite-mail/invite-mail.component';
import { StudentSettingComponent } from './student-setting/student-setting.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component'

@NgModule({
  declarations: [
    AppComponent,
    AdminLoginComponent,
    HelpSupportComponent,
    HomeComponent,
    ContactUsComponent,
    StudentLoginComponent,
    InstructionComponent,
    ExaminationComponent,
    ResultComponent,
    PapersComponent,
    PerformanceComponent,
    AdminSettingComponent,
    SidenavComponent,
    HeaderComponent,
    InviteMailComponent,
    StudentSettingComponent,
    StudentDashboardComponent
  ],
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    MatListModule,
    BrowserModule,
    AppRoutingModule,
    NgbCollapseModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatCardModule,
    MatButtonModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
