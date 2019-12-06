import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.class';
import { UserService } from 'src/app/service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../../base/base.component';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent extends BaseComponent implements OnInit {

  user: User = new User;
  title: string = 'User Edit';
  id: number = 0;

  constructor(private userSvc: UserService,
    private router: Router,
    private route: ActivatedRoute,
    protected sysSvc: SystemService) {
      super(sysSvc);
     }

  ngOnInit() {
    super.ngOnInit();
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.userSvc.get(this.id).subscribe(jr => {
      this.user = jr.data as User;
    });
  }
  delete() {
    this.userSvc.delete(this.id).subscribe(jr => {
      if (jr.errors != null) {
        console.log("Error deleting credit: " + jr.errors);

      }
      this.router.navigateByUrl('users/list');
    })
  }

}
