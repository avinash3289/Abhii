import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './navbar/admin/admin.component';
import { UserComponent } from './navbar/user/user.component';
import { SignpComponent } from './navbar/signp/signp.component';
import { HomeComponent } from './navbar/home/home.component';
import { SuppilerComponent } from './navbar/suppiler/suppiler.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserregistrationComponent } from './navbar/userregistration/userregistration.component';
import { SupplierregistrationComponent } from './navbar/supplierregistration/supplierregistration.component';
import { AboutusComponent } from './navbar/aboutus/aboutus.component';
import { SupboardComponent } from './supboard/supboard.component';
const routes: Routes = [
    {path:'',redirectTo:'navbar',pathMatch:'full'},
    {path:'navbar',component:NavbarComponent,children:[
      {path:'',component:HomeComponent},
      {path:'home',component:HomeComponent},
      {path:'admin',component:AdminComponent},
      {path:'signup',component:SignpComponent},
      {path:'suppiler',component:SuppilerComponent},
      {path:'user',component:UserComponent},
      {path:'usereg',component:UserregistrationComponent},
      {path:'supreg',component:SupplierregistrationComponent},
      {path:'about',component:AboutusComponent}
    ]},
    {path:'dashboard',component:DashboardComponent},
    {path:'supbd',component:SupboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
