import {Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {StudentService} from "../../services/student.service";
import {Student} from "../../models/student";
import {Router} from "@angular/router";
import {MatPaginator, MatSnackBar} from "@angular/material";
import {remove} from "lodash";
import 'rxjs/Rx';

@Component({
  selector: 'app-students-listing',
  templateUrl: './students-listing.component.html',
  styleUrls: ['./students-listing.component.scss']
})
export class StudentsListingComponent implements OnInit, AfterViewInit {

  constructor(private studentService: StudentService,
              private router: Router,
              public snackBar: MatSnackBar) { }
  displayedColumns: string[] = ['name', 'technology', 'experience', 'phone', 'action'];
  dataSource: Student[] = [];
  resultsLength = 0;
  isResultsLoading = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  saveBtnHandler() {
    this.router.navigate(['dashboard', 'students', 'new']);
  }

  deleteBtnHandler(id) {
    this.studentService.deleteStudent(id)
      .subscribe(data => {
        const removedItems = remove(this.dataSource, (item) => {
          return item._id === data._id;
        });
        this.dataSource = [...this.dataSource];
        this.snackBar.open('Student deleted', 'Success', {
          duration: 2000
        })
      }, err => this.errorHandler(err, 'Failed to fetch student'));
  }

  editBtnHandler(id) {
    this.router.navigate(['dashboard', 'students', id]);
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.isResultsLoading = true;
    this.paginator
      .page
      .flatMap(data => {
        return this.studentService.getStudents({page: data.pageIndex, perPage: data.pageSize});
      })
      .subscribe(data => {
          this.dataSource = data['docs'];
          this.resultsLength = data['total'];
          this.isResultsLoading = false;
        }, err => this.errorHandler(err, 'Failed to fetch students with pagination'),
        () => {
          this.isResultsLoading = false;
        });
    this.populateStudents();
  }

  private populateStudents() {
    this.isResultsLoading = true;
    this.studentService.getStudents({page: 1, perPage: 10}).subscribe(
      data => {
        this.dataSource = data['docs'];
        this.resultsLength = data['total'];
        this.isResultsLoading = false;
      }, err => this.errorHandler(err, 'Failed to fetch students with pagination'),
      () => {
        this.isResultsLoading = false;
      });
  }

  private errorHandler(error, message) {
    this.isResultsLoading = false;
    console.error(error);
    this.snackBar.open(message, 'Error', {
      duration:2000
    })
  }

}

