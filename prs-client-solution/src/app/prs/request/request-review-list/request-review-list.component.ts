import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class'
@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-review-list.component.html',
  styleUrls: ['./request-review-list.component.css']
})
export class RequestReviewListComponent implements OnInit {

  requests!:Request[];


  constructor(
     private syssvc: SystemService,
     private reqsvc: RequestService
  ) {}



  ngOnInit(): void {
    this.syssvc.chkLogin();
    let userId = this.syssvc.user.id;
    this.reqsvc.reviews(userId).subscribe({
      next: (res) => {
        this.requests = res;
        console.debug(res);
      }
    });
  }

}
