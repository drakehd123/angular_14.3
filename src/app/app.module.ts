import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HeroModule} from './hero/hero.module';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { MComponent } from './m/m.component';
@NgModule({
  declarations: [
    AppComponent,
    MComponent
  ],
  imports: [
    BrowserModule,
    HeroModule,
    FormsModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
