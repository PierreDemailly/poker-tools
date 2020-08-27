import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HandGridComponent } from './shared/components/hand-grid/hand-grid.component';

const routes: Routes = [
  { 
    path: '',
    pathMatch: 'full',
    component: HandGridComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
