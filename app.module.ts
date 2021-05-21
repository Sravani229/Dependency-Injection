import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeServicesService } from './employee-services.service';
import { EmplistComponent } from './emplist/emplist.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';
import {HttpClient, HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    EmplistComponent,
    EmpdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EmployeeServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
