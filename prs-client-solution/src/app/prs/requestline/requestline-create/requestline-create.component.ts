import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { RequestService } from '../../request/request.service';
import { VendorServiceService } from '../../vendor/vendor-service.service';
import { Request } from '../../request/request.class';
import { RequestlineService } from '../requestline.service';
import { Requestline } from '../requestline.class';
import { Product } from '../../product/product.class';
import { ProductService } from '../../product/product.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {
  requestline: Requestline = new Requestline();
  products!: Product[];


  constructor(
    private syssvc: SystemService,
    private rqlnsvc: RequestlineService,
    private prodsvc: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    /*this.request.userId = this.syssvc.getLoggedInUser()!.id;*/
    this.rqlnsvc.create(this.requestline).subscribe({
      next: (res) => {
        console.debug("Requestline Created");
        this.router.navigateByUrl(`/request/lines/${this.requestline.requestId}`)
      },
      error: (err) => console.error(err)
    });
  }
  ngOnInit(): void {
    /*this.syssvc.chkLogin();*/
    this.prodsvc.list().subscribe({
      next: (res) => {
        console.debug(res);
        this.products = res;
      },
      error: (err) => console.error(err)
    });
      let rid= this.route.snapshot.params["rid"];
      this.requestline.requestId = +rid;

  }

}
