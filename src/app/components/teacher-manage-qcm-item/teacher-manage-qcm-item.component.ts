import { Component, OnInit, Input } from '@angular/core';
import { TeacherManageQcmService } from '../../services/teacher-manage-qcm-service';

@Component({
  selector: 'app-teacher-manage-qcm-item',
  templateUrl: './teacher-manage-qcm-item.component.html',
  styleUrls: ['./teacher-manage-qcm-item.component.scss']
})
export class TeacherManageQcmItemComponent implements OnInit {

  @Input() qcmId: number;
  @Input() qcmTitle: string;
  @Input() qcmTime: number;

  constructor(private teacherManageQcmService: TeacherManageQcmService) { }

  ngOnInit() {

  }

  getQcmId() {
    return this.qcmId;
  }

  onEditQcm(qcmId: number) {
    this.teacherManageQcmService.editQcm(qcmId);
  }

  onDeleteQcm() {
    this.teacherManageQcmService.deleteQcm();
  }

}
