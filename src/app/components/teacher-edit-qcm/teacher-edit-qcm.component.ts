import { Component, OnInit } from '@angular/core';
import { TeacherManageQcmService } from '../../services/teacher-manage-qcm-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teacher-edit-qcm',
  templateUrl: './teacher-edit-qcm.component.html',
  styleUrls: ['./teacher-edit-qcm.component.scss']
})
export class TeacherEditQcmComponent implements OnInit {

  qcmTitle: string;

  constructor(private teacherManageQcmService: TeacherManageQcmService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    this.qcmTitle = this.teacherManageQcmService.getQcmById(+id).title;
  }

}
