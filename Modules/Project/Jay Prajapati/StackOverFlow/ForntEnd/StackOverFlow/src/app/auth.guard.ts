import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

import {AuthenticationService} from './authentication.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _authService: AuthenticationService,
    private route : Router ){

    }
    canActivate() : boolean{
      if(this._authService.loggedIn()){
        return true
      }else{
        this.route.navigate(['login']);
        return false;
      }
    }
  
}
