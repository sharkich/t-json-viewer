import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TJsonViewerComponent} from './t-json-viewer.component/t-json-viewer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TJsonViewerComponent
  ],
  exports: [
    TJsonViewerComponent
  ]
})
export class TJsonViewerModule {
}
