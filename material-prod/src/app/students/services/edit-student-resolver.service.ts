import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Student } from '../models/student';
import { StudentService } from './student.service';
import { take, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EditStudentResolverService implements Resolve<Student> {

  constructor(private studentService: StudentService,
              private router: Router) { }
  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Student> {
    let id = route.paramMap.get('id');
    return this.studentService.getStudent(id)
      .pipe(
        take(1),
        map(student => {
          if (student) {
            return student;
          }
          else {
            this.router.navigate(['/dashboard', 'students']);
            return null;
          }
        })
      )
  }

}
