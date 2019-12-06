import { Component, OnInit } from '@angular/core';
import { LineItem } from 'src/app/model/line-item.class';
import { Product } from 'src/app/model/product.class';
import { LineItemService } from 'src/app/service/line-item.service';
import { ProductService } from 'src/app/service/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RequestService } from 'src/app/service/request.service';
import { Request } from 'src/app/model/request.class';
import { BaseComponent } from '../../base/base.component';
import { SystemService } from 'src/app/service/system.service';

@Component({
  selector: 'app-line-item-edit',
  templateUrl: './line-item-edit.component.html',
  styleUrls: ['./line-item-edit.component.css']
})
export class LineItemEditComponent extends BaseComponent implements OnInit {
  lineitem: LineItem = new LineItem;
  title: string = 'LineItem Edit';
  products: Product[] = [];
  id: number = 0;
  request: Request = new Request();


  constructor(private lineitemSvc: LineItemService,
    private router: Router,
    private productSvc: ProductService,
    private route: ActivatedRoute,
    private requestSvc: RequestService,
    private location: Location,
    protected sysSvc: SystemService) {
      super(sysSvc);
     }

  ngOnInit() {
    super.ngOnInit();
    this.productSvc.list().subscribe(jr => {
      this.products = jr.data as Product[];
      console.log("products: ", this.products);
    });
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.lineitemSvc.get(this.id).subscribe(jr => {
      this.lineitem = jr.data as LineItem;
      console.log(this.lineitem);
    });
  }

  save(): void {
    this.lineitemSvc.update(this.lineitem).subscribe(() => {
      console.log("saved lineitem...");
      console.log(this.lineitem);
      this.router.navigateByUrl('/requests/lines/'+ this.lineitem.request.id);
    });
  }

  backClicked() {
    this.location.back();
  }


  compProduct(a: Product, b: Product): boolean {
    return a && b && a.id === b.id;
  }
}