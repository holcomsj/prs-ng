import { Component, OnInit } from '@angular/core';
import { Vendor } from 'src/app/model/vendor.class';
import { VendorService } from 'src/app/service/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor: Vendor = new Vendor;
  title: string = 'Vendor Edit';
  id: number = 0;

  constructor(private vendorSvc: VendorService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(parms => this.id = parms['id']);
    this.vendorSvc.get(this.id).subscribe(jr => {
      this.vendor = jr.data as Vendor;
    });
  }
  delete() {
    this.vendorSvc.delete(this.id).subscribe(jr => {
      if (jr.errors != null) {
        console.log("Error deleting credit: " + jr.errors);

      }
      this.router.navigateByUrl('vendors/list');
    })
  }
}
