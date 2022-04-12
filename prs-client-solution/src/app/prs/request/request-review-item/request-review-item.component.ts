import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { Requestline } from '../../requestline/requestline.class';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css']
})
export class RequestReviewItemComponent implements OnInit {
  showVerifyButton: boolean = false;
  request!: Request;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private syssvc: SystemService,
    private reqsvc: RequestService,


  ) { }

  review(): void {
    this.reqsvc.review(this.request).subscribe({
      next: (res) => {
        console.debug("review");
        this.refresh();
      },
      error: (err) => {
        console.error(err)
      },
    });
  }
  edit(rqln: Requestline): void {
    this.router.navigateByUrl(`/requestlines/edit/${rqln.id}`);
  }

  remove(rqln: Requestline): void {
    this.reqsvc.remove(rqln.id).subscribe({
      next: (res) => {
        console.debug("req line removed");
        this.refresh();
      },
      error: (err) => console.error(err)
    });
  }
  approve(): void {
    this.reqsvc.approve(this.request).subscribe({
      next: (res) => {
        console.debug("req approved");
        this.refresh();
      },
      error: (err) => console.error(err)
    });
  }
  reject(): void {
    this.showVerifyButton = !this.showVerifyButton;
  }
verifyReject(): void{
  this.showVerifyButton = false;
  this.reqsvc.reject(this.request).subscribe({
    next: (res) => {
      console.debug("req rejected");
      this.refresh();
    }
  })
}


refresh(): void {
  let id = this.route.snapshot.params["id"];
  this.reqsvc.get(id).subscribe({
    next: (res) => {
      console.debug("request:", res);
      this.request = res;
    },
    error: (err) => console.error(err)
 
  })
}


  ngOnInit(): void {
    this.refresh();
  }

}
