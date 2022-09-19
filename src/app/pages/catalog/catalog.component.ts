import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SessionService } from '../../services/session/session.service';
import { HttpService } from '../../services/http/http.service';
import { Cat } from 'src/app/services/models';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  public isReady: boolean = false;
  public cats: Cat[] = [];

  constructor(
    private router: Router,
    private sessionService: SessionService,
    private http: HttpService
  ) {}

  ngOnInit(): void {
    if (!this.sessionService.existsActiveSession()) {
      this.router.navigate(['/']);
    }

    this.http.callAPI().subscribe((response: Cat[]) => {
      this.cats = response;
      this.isReady = true;
    });
  }
}
