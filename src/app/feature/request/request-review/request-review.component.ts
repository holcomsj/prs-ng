import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/service/request.service';
import { SystemService } from 'src/app/service/system.service';
import { BaseComponent } from '../../base/base.component';
import { Request } from 'src/app/model/request.class';

@Component({
  selector: 'app-request-review',
  templateUrl: './request-review.component.html',
  styleUrls: ['./request-review.component.css']
})
export class RequestReviewComponent extends BaseComponent implements OnInit {

  title: string = "Request review";
  requests: Request[] = [];
  request: Request = new Request;
  


  constructor(private requestSvc: RequestService,
    protected sysSvc: SystemService) {
    super(sysSvc);
   }

  ngOnInit() {
    super.ngOnInit();
    this.requestSvc.listForReview(this.loggedInUser.id).subscribe(jr => {
      this.requests = jr.data as Request[];
    });

  }
  updateReason(request: Request){
    this.requestSvc.update(this.request).subscribe(jr => {
      this.request.reasonForRejection = '';
    });
  }
}
