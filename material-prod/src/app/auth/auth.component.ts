import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../core/services/auth.service";
import {JwtService} from "../core/services/jwt.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authForm: FormGroup;
  title = '';
  isResultsLoading = false;
  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private jwtService: JwtService,
              private router: Router,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.initForm();
    this.title = this.router.url === '/login' ? 'Login' : 'Signup';
  }

  onSubmit() {
    if (this.title === 'Signup') {
      this.isResultsLoading = true;
      this.authService.signup(this.authForm.value)
        .subscribe(data => {
          console.log(data);
            this.snackBar.open('You can Login', 'Success', {
              duration: 2000
            });
          this.router.navigate(['/login']);
        }, err => this.errorHandler(err, 'Failed to Signup'),
          () => this.isResultsLoading = false);
    } else {
      this.isResultsLoading = true;
      this.authService.login(this.authForm.value)
        .subscribe(data => {
          console.log(data);
          this.jwtService.setToken(data.token);
          this.router.navigate(['/dashboard']);
        }, err => this.errorHandler(err, 'Failed to Login'),
          () => this.isResultsLoading = false);
    }
  }

  private initForm() {
    this.authForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  private errorHandler(error, message) {
    this.isResultsLoading = false;
    console.error(error);
    this.snackBar.open(message, 'Error', {
      duration:2000
    })
  }

}
