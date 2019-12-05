import { Component, OnInit } from '@angular/core';
import { Request } from 'src/app/model/request.class';
import { LineItem } from 'src/app/model/line-item.class';
import { RequestService } from 'src/app/service/request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LineItemService } from 'src/app/service/line-item.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {
  title: string = "Request Line Items";
  lineTitle: string = "Line Items";
  request: Request = new Request;
  lines: LineItem[] = [];
  id: number = 0;

  constructor(private requestSvc: RequestService,
    private router: Router,
    private route: ActivatedRoute,
    private lineitemSvc: LineItemService) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.requestSvc.get(this.id).subscribe(jr => {
      this.request = jr.data as Request;});
     
      this.lineitemSvc.getForReq(this.id).subscribe(jr => {
        this.lines = jr.data as LineItem[];
        console.log(this.lines);
    });

    
  }
}



