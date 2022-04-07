import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VendorServiceService } from '../vendor-service.service';
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  vendor: Vendor = new Vendor();

  constructor(
    private vendsvc: VendorServiceService,
    private router: Router,
  ) { }

  save(): void {
    this.vendsvc.create(this.vendor).subscribe({
      next: (res) => {
        console.debug("Vendor Added");
        this.router.navigateByUrl("/vendor/list")
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
  }

}
