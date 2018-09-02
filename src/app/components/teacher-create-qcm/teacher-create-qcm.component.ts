import { Component, OnInit } from '@angular/core';
import { TeacherCreateQcmService } from '../../services/teacher-create-qcm.service';

@Component({
  selector: 'app-teacher-create-qcm',
  templateUrl: './teacher-create-qcm.component.html',
  styleUrls: ['./teacher-create-qcm.component.scss']
})
export class TeacherCreateQcmComponent implements OnInit {

  dayDate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(
        () => {
          resolve(date);
        }, 2000
      );
    }
  );

  questions: any[];

  constructor(private teacherCreateQcmService: TeacherCreateQcmService) { }

  ngOnInit() {
    this.questions = this.teacherCreateQcmService.questions;
  }

  onAddQuestion() {
    this.teacherCreateQcmService.addQuestion();
  }

  onValidQcm() {
    this.teacherCreateQcmService.validQcm();
  }

}
