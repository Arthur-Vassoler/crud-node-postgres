import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PropertiesComponent } from './properties/properties.component';

import { PropertiesService } from './properties.service';
import { TableService } from './table.service';

import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertiesComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PropertiesService,
              TableService,
              HttpClientModule],
  bootstrap: [AppComponent]
})

export class AppModule { }
