import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/app/model/line-item.class';
import { RequestService } from 'src/app/service/request.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LineItemService } from 'src/app/service/line-item.service';
import { Request } from 'src/app/model/request.class';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-request-approve',
  templateUrl: './request-approve.component.html',
  styleUrls: ['./request-approve.component.css']
})
export class RequestApproveComponent implements OnInit {

  title: string = "Request Line Items";
  lineTitle: string = "Line Items";
  request: Request = new Request;
  lines: LineItem[] = [];
  id: number = 0;

  constructor(private requestSvc: RequestService,
    private router: Router,
    private route: ActivatedRoute,
    private lineitemSvc: LineItemService,
    protected sysSvc: SystemService) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.requestSvc.get(this.id).subscribe(jr => {
      this.request = jr.data as Request;
    });

    this.lineitemSvc.getForReq(this.id).subscribe(jr => {
      this.lines = jr.data as LineItem[];
      console.log(this.lines);
    });
    

  }
  approve(r: Request){
    this.requestSvc.approve(r).subscribe(jr => {
      this.router.navigateByUrl('/requests/review/' + this.sysSvc.loggedInUser.id);
    });
  }
  reject(r: Request){
    this.requestSvc.reject(r).subscribe(jr => {
      this.router.navigateByUrl('/requests/review/' + this.sysSvc.loggedInUser.id);
    });
  }
}
