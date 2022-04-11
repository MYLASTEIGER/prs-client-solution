import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { Product } from '../../product/product.class';
import { ProductService } from '../../product/product.service';
import { RequestService } from '../../request/request.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {
  request!: Request;
  product!: Product[];
  requestline!: Requestline;

  constructor(
    private rqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router,
    private prodsvc: ProductService,
    private syssvc: SystemService,
    private rqlnsvc: RequestlineService
  ) { }

  save(): void {
    this.requestline.productId = +this.requestline.productId;
    this.rqlnsvc.change(this.requestline).subscribe({
      next: (res) => {
        console.debug("Requestline Changed");
        this.router.navigateByUrl("/request/lines/${this.requestline.requestId")
        this.requestline =res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  ngOnInit(): void {
    this.prodsvc.list().subscribe({
      next: (res) => {
        console.log(res);
        this.product = res;
      },
      error: (err) => {
        console.error(err)
      }  
      });
      let id = +this.route.snapshot.params["id"];
      this.rqlnsvc.get(id).subscribe({
        next: (res) => {
          console.debug("Requestline", res);
          this.requestline = res;
        },
        error: (err) => {
          console.error(err)
        }
      });
  }

}
