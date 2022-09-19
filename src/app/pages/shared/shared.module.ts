import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';

import { NavbarComponent } from '../../components/navbar/navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, ButtonModule, MenubarModule],
  exports: [NavbarComponent],
})
export class SharedModule {}
