import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { CompanyService } from '../shared/company.service'

@Component({
  templateUrl:'./company-details.component.html',
  styles: [ ` .container { padding-left : 20px; padding-right : 20px; } `]
})

export class CompanyDetailsComponent{
  company:any

  constructor(private companyService:CompanyService, private route:ActivatedRoute){

  }

  ngOnInit(){
    this.company = this.companyService.getCompany(+this.route.snapshot.params['id'])
  }
}
