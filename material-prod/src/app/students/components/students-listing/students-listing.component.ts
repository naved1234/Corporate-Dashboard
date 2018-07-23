import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-students-listing',
  templateUrl: './students-listing.component.html',
  styleUrls: ['./students-listing.component.scss']
})
export class StudentsListingComponent implements OnInit {

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getStudents().subscribe(
      data => {
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }

}
