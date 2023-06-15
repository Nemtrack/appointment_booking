import { Routes } from "@angular/router";
import {
  CompanyDetailsComponent,
  CompanyListComponent,
  CreateCompanyComponent,
  CompanyRouteActivator,
  CompanyListResolver,
  CreateServiceComponent
}from './companies/index'
import { Error404Component } from "./errors/404.componet";

export const appRoutes:Routes = [
  { path: 'companies/new', component: CreateCompanyComponent,
    canDeactivate: ['canDeactivateCreateCompany'] },
  { path: 'companies', component: CompanyListComponent, resolve:
    { companies: CompanyListResolver} },
  { path: 'companies/:id', component: CompanyDetailsComponent,
    canActivate:[CompanyRouteActivator] },
  { path: 'companies/services/new', component: CreateServiceComponent},
  { path: '404', component: Error404Component},
  { path: '', redirectTo: '/companies', pathMatch: 'full'},
  {
    path: 'user',
    loadChildren: () => import('./user/user.module')
      .then(m => m.UserModule)
  }
]
