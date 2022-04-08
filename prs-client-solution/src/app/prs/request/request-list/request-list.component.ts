import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { Request } from '../request.class';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests!: Request[];

  constructor(
    private rqsvc: RequestService
    
  ) { }

  ngOnInit(): void {
    this.rqsvc.list().subscribe({
      next: (res) => {
        this.requests = res;
        console.debug("Requests", res)
      },
      error: (err) => {
        console.error(err)
      }
    });

  }

}
