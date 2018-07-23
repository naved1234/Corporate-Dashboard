import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {StudentService} from "../../services/student.service";

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  studentForm: FormGroup;

  constructor(private fb: FormBuilder,
              private studentService: StudentService) { }

  ngOnInit() {
    this.createForm();
  }

  onSubmit() {
    this.studentService.createStudent(this.studentForm.value)
      .subscribe(data => {
        this.studentForm.reset();
      }, err => {
        console.log(err);
        }
      )
  }

  createForm() {
    this.studentForm = this.fb.group({
      name: '',
      technology: '',
      experience: '',
      phone: '',
    })
  }

}
