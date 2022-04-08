import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VendorServiceService } from '../../vendor/vendor-service.service';
import { Vendor } from '../../vendor/vendor.class';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  
  product! : Product;
  vendors!: Vendor[];
  showVerifyButton: boolean = false;


  constructor(
    private prodsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router, 
    private vendsvc: VendorServiceService
  ) { }

    remove(): void {
      this.showVerifyButton =!this.showVerifyButton
    }
    verifyRemove(): void {
      this.showVerifyButton = false;
      this.prodsvc.remove(this.product.id).subscribe({
        next: (res) => {
          console.debug("Product Deleted");
          this.router.navigateByUrl("/product/list");
          this.product = res;
        },
      })
    }


  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.prodsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Product:", res);
        this.product = res;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

}

