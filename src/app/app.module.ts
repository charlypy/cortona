import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {StateObjectComponent} from './state-object/state-object.component';
import {ConstellationService} from './constellation.service';
import {HubService} from 'ngx-signalr-hubservice';

@NgModule({
  declarations: [
    AppComponent,
    StateObjectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ConstellationService,
    HubService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
