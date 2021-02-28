import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Thing1Component } from './thing1/thing1.component';
import { Thing2Component } from './thing2/thing2.component';


const routes: Routes = [
  {
    path: 'thing1',
    component: Thing1Component
  },
  {
    path: 'thing2',
    component: Thing2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
