import { Component, OnInit, inject } from '@angular/core'
import { CompanyService } from './shared/company.service';
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute, Route } from '@angular/router';

declare let toastr:any

@Component ({
  template: `
  <div>
    <h1>Serviceprovider companies</h1>
    <hr>
    <div class="row">
      <div *ngFor= "let company of companies"  class="col-md-5">
        <company-thumbnail (click)="handleThumbnailClick(company.name)"[company]="company"></company-thumbnail>
      </div>
    </div>
  </div>`
})

export class CompanyListComponent implements OnInit{
  companies: any;

  constructor (private companyService: CompanyService, private toastr:ToastrService,
    private route:ActivatedRoute){
  }

  ngOnInit(){
    this.companies = this.route.snapshot.data['companies']
  }

  handleThumbnailClick(companyName:any){
    this.toastr.success(companyName)
  }
}
