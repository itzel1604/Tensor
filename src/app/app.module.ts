import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DrawableDirective } from './drawable.directive';
import { Thing1Component } from './thing1/thing1.component';
import { Thing2Component } from './thing2/thing2.component';

@NgModule({
  declarations: [
    AppComponent,
    DrawableDirective,
    Thing1Component,
    Thing2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
