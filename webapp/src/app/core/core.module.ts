import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
// import { NgxModule } from '../shared/ngx/ngx.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from './http/http.module';
import { HeaderModule } from './components/header/header.module';

@NgModule({
  imports: [
    MaterialModule,
    // NgxModule,
    CommonModule,
    BrowserModule,
    HttpModule,
  ],
  declarations: [],
  exports: [
    HttpModule,
    HeaderModule
  ],
  providers: []
})
export class CoreModule {
}
