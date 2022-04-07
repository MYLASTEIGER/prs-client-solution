import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorServiceService } from '../vendor-service.service';
import { Vendor } from '../vendor.class';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor!: Vendor;
  showVerifyButton: boolean = false;

  constructor(
    private vendsvc: VendorServiceService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  remove(): void {
    this.showVerifyButton = !this.showVerifyButton;
  }
  verifyRemove(): void {
    this.showVerifyButton = false;
    this.vendsvc.remove(this.vendor.id).subscribe({
      next: (res) => {
        console.debug("Vendor is Deleted");
        this.router.navigateByUrl("/vendor/list")
      },
      error: (err) => {
        console.error(err)
      }
    })
  }
  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.vendsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Vendor:", res);
        this.vendor = res
      },
      error: (err) => {
        console.error(err)
      }
    })
  }

}
