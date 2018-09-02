import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { TeacherManageQcmComponent } from './components/teacher-manage-qcm/teacher-manage-qcm.component';
import { TeacherManageQcmItemComponent } from './components/teacher-manage-qcm-item/teacher-manage-qcm-item.component';
import { TeacherCreateQcmComponent } from './components/teacher-create-qcm/teacher-create-qcm.component';
import { TeacherCreateQcmQuestionComponent } from './components/teacher-create-qcm-question/teacher-create-qcm-question.component';
import { TeacherCreateQcmAnswerComponent } from './components/teacher-create-qcm-answer/teacher-create-qcm-answer.component';

import { TeacherManageQcmService } from './services/teacher-manage-qcm-service';
import { TeacherCreateQcmService } from './services/teacher-create-qcm.service';

import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: "auth", component: AuthComponent },
  { path: "manageqcm", component: TeacherManageQcmComponent },
  { path: "createqcm", component: TeacherCreateQcmComponent },
  { path: "", component: TeacherManageQcmComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TeacherManageQcmComponent,
    TeacherManageQcmItemComponent,
    TeacherCreateQcmComponent,
    TeacherCreateQcmQuestionComponent,
    TeacherCreateQcmAnswerComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    TeacherManageQcmService,
    TeacherCreateQcmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
