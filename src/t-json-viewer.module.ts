import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TJsonViewerComponent } from './t-json-viewer.component/t-json-viewer.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    TJsonViewerComponent
  ],
  exports: [
    TJsonViewerComponent
  ]
})
export class TJsonViewerModule { }
