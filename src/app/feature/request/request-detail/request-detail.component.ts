import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/service/system.service';
import { Request } from 'src/app/model/request.class';
import { BaseComponent } from '../../base/base.component';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent extends BaseComponent implements OnInit {

  request: Request = new Request;
  title: string = 'Request Detail';
  id: number = 0;
  

  constructor(private requestSvc: RequestService,
    private router: Router,
    protected sysSvc: SystemService,
    private route: ActivatedRoute) {
      super(sysSvc);
     }

  ngOnInit() {
  super.ngOnInit();
  this.request.user = this.sysSvc.loggedInUser;

    this.route.params.subscribe(parms => this.id = parms['id']);
    this.requestSvc.get(this.id).subscribe(jr => {
      this.request = jr.data as Request;
    });
    
  }
  delete() {
    this.requestSvc.delete(this.id).subscribe(jr => {
      if (jr.errors != null) {
        console.log("Error deleting request: " + jr.errors);

      }
      this.router.navigateByUrl('requests/list');
    });
  }

}
