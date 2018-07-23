import { Component, OnInit } from '@angular/core';
import {StudentService} from "../../services/student.service";
import {Student} from "../../models/student";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-students-listing',
  templateUrl: './students-listing.component.html',
  styleUrls: ['./students-listing.component.scss']
})
export class StudentsListingComponent implements OnInit {

  constructor(private studentService: StudentService,
              private router: Router,
              public snackBar: MatSnackBar) { }
  displayedColumns: string[] = ['name', 'technology', 'experience', 'phone', 'action'];
  dataSource: Student[] = [];

  saveBtnHandler() {
    this.router.navigate(['dashboard', 'students', 'new']);
  }

  deleteBtnHandler(id) {
    this.studentService.deleteStudent(id)
      .subscribe(data => {
        this.snackBar.open('Student deleted', 'Success', {
          duration: 2000
        })
      }, err => this.errorHandler(err, 'Failed to fetch student'));
  }

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

  private errorHandler(error, message) {
    console.error(error);
    this.snackBar.open(message, 'Error', {
      duration:2000
    })
  }

}

