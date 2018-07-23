import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../services/student.service";
import {Student} from "../../models/student";

@Component({
  selector: 'app-students-listing',
  templateUrl: './students-listing.component.html',
  styleUrls: ['./students-listing.component.scss']
})
export class StudentsListingComponent implements OnInit {

  constructor(private studentService: StudentService) { }
  displayedColumns: string[] = ['name', 'technology', 'experience', 'phone', 'action'];
  dataSource: Student[] = [];

  ngOnInit() {
    this.studentService.getStudents().subscribe(
      data => {
        this.dataSource = data;
      },
      err => {
        console.log(err);
      }
    );
  }

}

