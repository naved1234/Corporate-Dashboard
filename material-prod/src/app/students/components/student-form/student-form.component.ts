import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StudentService} from "../../services/student.service";
import {MatSnackBar} from "@angular/material";
import {Router} from "@angular/router";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  studentForm: FormGroup;

  constructor(private fb: FormBuilder,
              private studentService: StudentService,
              public snackBar: MatSnackBar,
              private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  onSubmit() {
    this.studentService.createStudent(this.studentForm.value)
      .subscribe(data => {
        this.snackBar.open('Student created', 'Success', {
          duration: 2000
        });
        this.studentForm.reset();
        this.router.navigate(['dashboard', 'students']);
      }, err => this.errorHandler(err, 'Failed to create student'));
  }

  createForm() {
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
