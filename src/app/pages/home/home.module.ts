import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';


import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    HomeRoutingModule
  ],
})
export class HomeModule {}