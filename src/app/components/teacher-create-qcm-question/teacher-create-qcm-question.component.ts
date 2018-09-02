import { Component, OnInit, Input } from '@angular/core';
import { TeacherCreateQcmService } from '../../services/teacher-create-qcm.service';

@Component({
  selector: 'app-teacher-create-qcm-question',
  templateUrl: './teacher-create-qcm-question.component.html',
  styleUrls: ['./teacher-create-qcm-question.component.scss']
})
export class TeacherCreateQcmQuestionComponent implements OnInit {

  @Input() questionId: number;
  @Input() questionTitle: string;

  constructor(private teacherCreateQcmService: TeacherCreateQcmService) { }

  ngOnInit() {
  }

  getQuestionId() {
    return this.questionId;
  }

  getColor() {
    if (this.questionId === 2) {
      return "green";
    }
    else {
      return "black";
    }
  }

  onAddAnswer() {
    this.teacherCreateQcmService.addAnswer();
  }

}
