import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/service/system.service';
import { Request } from 'src/app/model/request.class';
import { BaseComponent } from '../../base/base.component';
import { UserService } from 'src/app/service/user.service';
import { User } from 'src/app/model/user.class';
import { Location } from '@angular/common';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent extends BaseComponent implements OnInit {

  request: Request = new Request;
  title: string = 'Request Edit';
  id: number = 0;
  users: User[]=[];
  

  constructor(private requestSvc: RequestService,
    private router: Router,
    protected sysSvc: SystemService,
    private route: ActivatedRoute,
    private userSvc: UserService,
    private location: Location) {
      super(sysSvc);
     }

  ngOnInit() {
    super.ngOnInit();
    this.request.user = this.sysSvc.loggedInUser;

    this.route.params.subscribe(parms => this.id = parms['id']);
    this.requestSvc.get(this.id).subscribe(jr => {
      this.request = jr.data as Request;
    });
    this.userSvc.list().subscribe(jr => {
      this.users = jr.data as User[];
      console.log("users: ", this.users);
    });
    
  }


  save(): void {
    this.requestSvc.update(this.request).subscribe(() => {
      console.log("saved request...");
      console.log(this.request);
      this.router.navigateByUrl('/requests/list');
    });
  }
  backClicked() {
    this.location.back();
  }
  compUser(a: User, b: User): boolean {
    return a && b && a.id === b.id;
  }
}
