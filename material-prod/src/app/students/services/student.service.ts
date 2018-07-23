import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Student} from "../models/student";

const BASE_URL = 'http://localhost:3000/api';

@Injectable()
export class StudentService {

  constructor(private httpClient: HttpClient) { }

  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${BASE_URL}/students`);
  }

}
