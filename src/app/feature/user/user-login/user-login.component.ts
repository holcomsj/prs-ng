import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../../base/base.component';
import { UserService } from 'src/app/service/user.service';
import { SystemService } from 'src/app/service/system.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.class';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent extends BaseComponent implements OnInit {
  msg: string = '';
  user: User = new User();

  constructor(private userSvc: UserService,
    protected sysSvc: SystemService,
    private router: Router) {
    super(sysSvc);
  }

  ngOnInit() {
    //defaulting username and pwd for testing purposes
    this.user.userName = 'holcomsj';
    this.user.password = 'Password1';

    //initialize system user to null
    this.sysSvc.loggedInUser = null;
  }

  login() {
    this.userSvc.login(this.user)
      .subscribe(jr => {
        if (jr.errors == null) {
          if (jr.data == null) {
            // no error but still no user???
            this.msg = "Invalid Username/Password combo.  Retry";
          }
          else {
            // should be g2g!
            this.user = jr.data as User;
            this.sysSvc.loggedInUser = this.user;
            //good login, navigate to 'home' page
            this.router.navigateByUrl('/users/list');
          }
        }
        else {
          this.msg = "Invalid Username/Password combo.  Retry";
        }
      });
  }

}
