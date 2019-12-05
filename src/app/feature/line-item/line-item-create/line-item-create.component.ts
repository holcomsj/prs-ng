import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/app/model/line-item.class';
import { LineItemService } from 'src/app/service/line-item.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product.class';
import { Request } from 'src/app/model/request.class';
import { ProductService } from 'src/app/service/product.service';
import { RequestService } from 'src/app/service/request.service';

@Component({
  selector: 'app-line-item-create',
  templateUrl: './line-item-create.component.html',
  styleUrls: ['./line-item-create.component.css']
})
export class LineItemCreateComponent implements OnInit {

  lineitem: LineItem = new LineItem;
  title: string = 'LineItem Create';
  products: Product[] = [];
  id: number = 0;
  requests: Request[] = [];
  

  constructor(private lineitemSvc: LineItemService,
    private router: Router,
    private productSvc: ProductService,
    private route: ActivatedRoute,
    private requestSvc: RequestService) { }

  ngOnInit() {
    this.productSvc.list().subscribe(jr => {
      this.products = jr.data as Product[];
      console.log("products: ", this.products);
    });
    this.requestSvc.list().subscribe(jr => {
      this.requests = jr.data as Request[];
      console.log("requests: ", this.requests);
    });
  }


  save(): void {
    this.lineitemSvc.save(this.lineitem).subscribe(jr => {
      console.log("saved lineitem...");
      console.log(this.lineitem);
      this.router.navigateByUrl('/requests/lines/:id');
    });
  }
}
