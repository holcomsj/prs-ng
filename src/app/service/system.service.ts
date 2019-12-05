import { Injectable } from '@angular/core';
import { User } from '../model/user.class';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  loggedInUser: User = null;

  constructor(private router: Router) { }
  admin(): boolean {
    return (this.loggedInUser.admin == null) ? false : this.loggedInUser.admin;
  }
  reviewer(): boolean {
    return (this.loggedInUser.reviewer == null) ? false : this.loggedInUser.reviewer;
  }
  
  checkLogin(): void {
    // if user is not logged in, send to login page
    // commenting out for testing purposes
    // if(this.loggedInUser == null) {
    //   this.router.navigateByUrl("/users/login");
    // }
  }
}

