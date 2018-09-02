import { Component, OnInit } from '@angular/core';
import { TeacherManageQcmService } from '../../services/teacher-manage-qcm-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacher-manage-qcm',
  templateUrl: './teacher-manage-qcm.component.html',
  styleUrls: ['./teacher-manage-qcm.component.scss']
})
export class TeacherManageQcmComponent implements OnInit {

  isAuth = false;

  qcms: any[];

  constructor(private teacherManageQcmService: TeacherManageQcmService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 2000
    );
  }

  ngOnInit() {
    this.qcms = this.teacherManageQcmService.qcms;
  }

  onCreerQcm() {
    this.teacherManageQcmService.creerQcm();
  }

  onSendQcm() {
    this.teacherManageQcmService.sendQcm();
  }

}
