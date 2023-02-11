import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './navbar/admin/admin.component';
import { UserComponent } from './navbar/user/user.component';
import { SignpComponent } from './navbar/signp/signp.component';
import { HomeComponent } from './navbar/home/home.component';
import { SuppilerComponent } from './navbar/suppiler/suppiler.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from  '@angular/common/http';
import { ApiService } from './api.service';
import { UserregistrationComponent } from './navbar/userregistration/userregistration.component';
import { SupplierregistrationComponent } from './navbar/supplierregistration/supplierregistration.component';
import { AboutusComponent } from './navbar/aboutus/aboutus.component';
import { SupboardComponent } from './supboard/supboard.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminComponent,
    UserComponent,
    SignpComponent,
    HomeComponent,
    SuppilerComponent,
    DashboardComponent,
    UserregistrationComponent,
    SupplierregistrationComponent,
    AboutusComponent,
    SupboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
