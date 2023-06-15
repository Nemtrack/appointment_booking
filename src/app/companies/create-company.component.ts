import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  templateUrl:'./create-company.component.html',
  styles: [`
    em { float: right; color:#E05C65; padding-left: 10px; }
    .error input { background-color:#E3C3C5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class CreateCompanyComponent implements OnInit {
  newCompanyForm!: FormGroup;
  newCompany: any;
  isDirty: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.newCompanyForm = new FormGroup({
      name: new FormControl(),
      businessHours: new FormControl(),
      address: new FormControl(),
    });
    this.newCompany = {};
  }

  saveCompany(formValues: FormControl) {
    console.log(formValues);
  }

  cancel() {
    this.router.navigate(['/companies']);
  }
}
