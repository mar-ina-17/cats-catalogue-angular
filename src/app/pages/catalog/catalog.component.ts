import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Cat } from '../../services/models';
import { User } from '../../services/models';
import { HttpService } from '../../services/http/http.service';
import { SessionService } from '../../services/session/session.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  public isReady: boolean = false;
  public cats: Cat[] = [];
  public user: User;

  constructor(
    private router: Router,
    private sessionService: SessionService,
    private http: HttpService
  ) {}

  ngOnInit(): void {
    if (!this.sessionService.existsActiveSession()) {
      this.router.navigate(['/']);
    }
    this.user = this.sessionService.session.sessionUser;

    this.http.callAPI().subscribe((response: Cat[]) => {
      this.cats = response;
      this.isReady = true;
    });
  }
}
