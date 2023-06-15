import { Router, ActivatedRouteSnapshot, CanActivate } from "@angular/router";
import { Injectable } from "@angular/core";
import { CompanyService } from "../shared/company.service"

@Injectable()
export class CompanyRouteActivator implements CanActivate{
  constructor(private companyService:CompanyService, private router:Router){
  }

  canActivate(route:ActivatedRouteSnapshot){
    const companyExists = !!this.companyService.getCompany(+route.params['id'])

    if(!companyExists)
      this.router.navigate(['/404'])
    return companyExists
  }
}
