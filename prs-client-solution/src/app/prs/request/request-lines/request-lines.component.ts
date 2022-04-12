import { Component, OnInit, ɵɵqueryRefresh, ɵɵtrustConstantResourceUrl } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/core/system.service';
import { RequestlineService } from '../../requestline/requestline.service';
import { RequestService } from '../request.service';
import { Request } from '../request.class';
import { Requestline } from '../../requestline/requestline.class';


@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {
  baseUrl: string = "http://localhost:15952/api/request/lines"

  request!: Request;

  constructor(
    private sys: SystemService,
    private router: Router,
    private route: ActivatedRoute,
    private rqsvc: RequestService,
    private rqlsvc: RequestlineService
  ) { }
  review(): void {
    this.rqsvc.review(this.request).subscribe({
      next: (res) => {
        console.debug("Request Reviewed");
        this.refresh();
        
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  refresh(): void {
    let id = this.route.snapshot.params["id"];
    this.rqsvc.get(id).subscribe({
      next: (res) => {
        console.log("Request", res)
        this.request = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  remove(rl:Requestline): void {
    this.rqlsvc.remove(rl.id).subscribe({
      next: (res) => {
        console.debug("requestline deleted");
        this.refresh();
      }

    });
    
  }

  edit(rl:Requestline): void{
    this.rqlsvc.change(rl).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigateByUrl(`/requestline/edit/${rl.id}`)
      },
      error: (err) => {
        console.error(err);
      }
    }); 
  }

  ngOnInit(): void {
    this.refresh(); 
  }

}