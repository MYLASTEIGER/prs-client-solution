import { Component, OnInit } from '@angular/core';
import { VendorServiceService } from '../vendor-service.service';
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors: Vendor[] = [];

  constructor(
    private vendsvc: VendorServiceService
  ) { }

  ngOnInit(): void {
    this.vendsvc.list().subscribe({
      next: (res) => {
        this.vendors = res;
        console.debug("Vendors", res);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}
