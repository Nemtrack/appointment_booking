import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { CompanyService } from '../shared/company.service'
import { ServiceListComponent } from './service-list.component'
import { IService } from '../shared/company.model'

@Component({
  templateUrl:'./company-details.component.html',
  styles: [`
  .container { padding-left : 20px; padding-right : 20px; }
  a { cursor: pointer }
  `]
})

export class CompanyDetailsComponent{
  company:any
  addMode!:boolean

  constructor(private companyService:CompanyService, private route:ActivatedRoute){

  }

  ngOnInit(){
    this.company = this.companyService.getCompany(+this.route.snapshot.params['id'])
  }

  addService(){
    this.addMode = true
  }

  saveNewService(service: IService) {
    const nextId = Math.max.apply(null, this.company.services.map((s:IService)=>s.id));
    service.id = nextId + 1
    this.company.services.push(service)
    this.companyService.updateCompany(this.company)
    this.addMode = false
  }

  cancelAddService(){
    this.addMode = false
  }
}
