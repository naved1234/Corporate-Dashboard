import { Injectable } from '@angular/core';
import {CanActivate, CanActivateChild, Router} from "@angular/router";
import {JwtService} from "./jwt.service";
import {MatSnackBar} from "@angular/material";

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild{

  constructor(private jwtService: JwtService,
              private router: Router,
              public snackBar: MatSnackBar) { }

  canActivate(): boolean {
    if (this.jwtService.getToken()) {
      return true;
    } else {
      this.snackBar.open('Login First', 'Error', {
        duration: 2000
      });
      this.router.navigate(['/login']);
      return false;
    }
  }

  canActivateChild(): boolean {
    return this.canActivate();
  }

}
