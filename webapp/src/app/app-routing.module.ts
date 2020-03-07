import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'feeds',
    loadChildren: () => import('./feeds/feeds.module').then(m => m.FeedsModule)
  },
  { path: '', pathMatch: 'full', redirectTo: 'feeds' },
  { path: '**', pathMatch: 'full', redirectTo: 'feeds' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
