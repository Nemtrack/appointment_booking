import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { CompanyService } from "./shared/company.service";
import { map } from "rxjs/operators";

@Injectable()
export class CompanyListResolver implements Resolve<any>{
  constructor(private companyService: CompanyService){

  }
  resolve() {
    return this.companyService.getCompanies().pipe(map(companies => companies))
  }
}
