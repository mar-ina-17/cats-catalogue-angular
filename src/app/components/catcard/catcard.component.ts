import { Component, Input } from '@angular/core';

import { Cat } from '../../services/models/index';

@Component({
  selector: 'app-catcard',
  templateUrl: './catcard.component.html',
  styleUrls: ['./catcard.component.scss'],
})
export class CatcardComponent {
  @Input() cat: Cat;
}
