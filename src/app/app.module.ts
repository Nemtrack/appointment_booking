import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {
  CompanyListComponent,
  CompanyThumbnailComponent,
  CompanyService,
  CompanyDetailsComponent,
  CreateCompanyComponent,
  CompanyRouteActivator,
  CompanyListResolver
} from './companies/index'


import { NavBarComponent } from './nav/navbar.component';
import { BookingAppComponent } from './booking-app.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';
import { Error404Component } from './errors/404.componet';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavBarComponent,
    BookingAppComponent,
    CompanyListComponent,
    CompanyThumbnailComponent,
    CompanyDetailsComponent,
    CreateCompanyComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    CompanyService,
    ToastrService,
    CompanyRouteActivator,
    { provide: 'canDeactivateCreateCompany', useValue: checkDirtyState },
    CompanyListResolver,
    AuthService
  ],
  bootstrap: [BookingAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateCompanyComponent){
  if (component.isDirty)
    return window.confirm('You have not saved the company. Do you wish to continue?')
  return true
}
