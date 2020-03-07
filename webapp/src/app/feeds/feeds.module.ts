import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { RouterModule } from '@angular/router';
import { FeedsComponent } from './list-view/feeds.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [FeedsComponent, DetailViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: FeedsComponent
      },
      {
        path: 'new',
        component: DetailViewComponent
      },
      {
        path: ':id',
        component: DetailViewComponent
      }
    ])
  ]
})
export class FeedsModule { }
