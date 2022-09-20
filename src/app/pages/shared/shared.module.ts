import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';

import { CatcardComponent } from '../../components/catcard/catcard.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
@NgModule({
  declarations: [NavbarComponent, CatcardComponent],
  imports: [CommonModule, ButtonModule, MenubarModule, CardModule],
  exports: [NavbarComponent, CatcardComponent],
})
export class SharedModule {}
