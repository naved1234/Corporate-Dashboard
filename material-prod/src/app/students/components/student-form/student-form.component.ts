import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../../services/student.service";
import {MatSnackBar} from "@angular/material";
import {ActivatedRoute, Router} from "@angular/router";
import {Student} from "../../models/student";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  private student: Student;
  studentForm: FormGroup;
  title = 'New Student';

  constructor(private fb: FormBuilder,
              private studentService: StudentService,
              public snackBar: MatSnackBar,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.createForm();
    this.setStudentToForm();
  }

  onSubmit() {
    if (this.student) {
      this.studentService.updateStudent(this.student._id, this.studentForm.value)
        .subscribe(data => {
          this.snackBar.open('Student updated', 'Success', {
            duration: 2000
          });
          this.router.navigate(['dashboard', 'students']);
        }, err => this.errorHandler(err, 'Failed to update student'));
    } else {
      this.studentService.createStudent(this.studentForm.value)
        .subscribe(data => {
          this.snackBar.open('Student created', 'Success', {
            duration: 2000
          });
          this.studentForm.reset();
          this.router.navigate(['dashboard', 'students']);
        }, err => this.errorHandler(err, 'Failed to create student'));
    }
  }

  private setStudentToForm() {
    this.route.params
      .subscribe(params => {
        let id = params['id'];
        if (id == 'new') return;
        this.title = 'Edit Student';
        this.studentService.getStudent(id)
          .subscribe(data => {
            this.student = data;
            this.studentForm.patchValue(this.student);
          }, err => this.errorHandler(err, 'Failed to fetch the student'));
      });
  }

  private createForm() {
    this.studentForm = this.fb.group({
      name: ['', Validators.required],
      technology: ['', Validators.required],
      experience: ['', Validators.required],
      phone: ['', Validators.required],
    })
  }

  private errorHandler(error, message) {
    console.error(error);
    this.snackBar.open(message, 'Error', {
      duration:2000
    })
  }

}
