import { Component, OnInit } from '@angular/core';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private syssvc: SystemService,
  ) { }

  ngOnInit(): void {
    this.syssvc.chkLogin();
  }

}
