import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Student, StudentPaginationRsp} from "../models/student";

const BASE_URL = 'http://localhost:3000/api';

@Injectable()
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  getStudents({page, perPage}): Observable<StudentPaginationRsp[]> {
    return this.httpClient.get<StudentPaginationRsp[]>(`${BASE_URL}/students?page=${page + 1}&perPage=${perPage}`);
  }
  createStudent(body: Student): Observable<Student> {
    return this.httpClient.post<Student>(`${BASE_URL}/students`, body);
  }
  deleteStudent(id: string): Observable<Student> {
    return this.httpClient.delete<Student>(`${BASE_URL}/students/${id}`);
  }
  getStudent(id: string): Observable<Student> {
    return this.httpClient.get<Student>(`${BASE_URL}/students/${id}`);
  }
  updateStudent(id: string, body: Student): Observable<Student> {
    return this.httpClient.put<Student>(`${BASE_URL}/students/${id}`, body);
  }
}
