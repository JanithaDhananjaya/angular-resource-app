import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemsRoutingModule } from './items-routing.module';
import { ItemsComponent } from './items.component';
import { FormsModule } from '@angular/forms';
import {MatPaginatorModule} from '@angular/material/paginator';
import {Ng2SearchPipeModule} from 'ng2-search-filter';


@NgModule({
  declarations: [ItemsComponent],
  imports: [
    CommonModule,
    ItemsRoutingModule,
    FormsModule,
    MatPaginatorModule,
    Ng2SearchPipeModule,
  ]
})
export class ItemsModule { }
