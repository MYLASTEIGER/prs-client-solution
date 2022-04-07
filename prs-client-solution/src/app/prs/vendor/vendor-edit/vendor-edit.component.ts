import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorServiceService } from '../vendor-service.service';
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  vendor!: Vendor

  constructor(
    private vendsvc: VendorServiceService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }
    save(): void {
      console.debug("B4:", this.vendor);
      this.vendsvc.change(this.vendor).subscribe({
        next: (res) => {
          console.debug("Vendor Updated");
          this.router.navigateByUrl("/vendor/list");
          this.vendor = res;
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
  ngOnInit(): void {
    let id = +this.route.snapshot.params["id"];
    this.vendsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Vendor:", res);
        this.vendor = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
