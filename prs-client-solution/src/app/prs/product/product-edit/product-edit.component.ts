import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { VendorServiceService } from '../../vendor/vendor-service.service';
import { Vendor } from '../../vendor/vendor.class';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product!: Product;
  vendors!: Vendor[];

  constructor(
    private prodsvc:ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private vendsvc: VendorServiceService,
    private syssvc: SystemService,
  ) { }

  save(): void {
    this.prodsvc.change(this.product).subscribe({
      next: (res) => {
        console.debug("Product Updated");
        this.router.navigateByUrl("/product/list")
        this.product = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.vendsvc.list().subscribe({
      next: (res) =>{
        console.log(res);
        this.vendors = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
    let id = +this.route.snapshot.params["id"];
    this.prodsvc.get(id).subscribe({
      next: (res) => {
        console.debug("Product:", res);
        this.product = res;
      },
      error: (err) => {
        console.error(err);
      }

    });
  }

}
