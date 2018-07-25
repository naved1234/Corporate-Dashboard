import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Student} from "../../models/student";

@Component({
  selector: 'app-student-view',
  templateUrl: './student-view.component.html',
  styleUrls: ['./student-view.component.scss']
})
export class StudentViewComponent implements OnInit {

  student: Student;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data: {student: Student}) => {
      this.student = data.student;
      console.log(this.student);
    });
  }

}
