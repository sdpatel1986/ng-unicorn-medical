import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {SearchService} from "./core/services/search.service";
import {AppRoutingModule} from "./app.routing.module";
import { DashboardComponent } from './dashboard/dashboard.component';
import {LayoutModule} from "./core/layout/layout.module";
import { SearchComponent } from './search/search.component';
import { BoardComponent } from './dashboard/board/board.component';
import { DisplayStackoverflowComponent } from './dashboard/board/display-stackoverflow/display-stackoverflow.component';
import { DisplayWeatherdataComponent } from './dashboard/board/display-weatherdata/display-weatherdata.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,
    BoardComponent,
    DisplayStackoverflowComponent,
    DisplayWeatherdataComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    LayoutModule,
    AppRoutingModule
  ],
  providers: [SearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
