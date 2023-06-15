import { Component, Input } from "@angular/core";
import { IService } from "../shared/company.model";

@Component({
  selector: 'service-list',
  template: `
    <div class="row" *ngFor="let service of services">
      <div class="col-md-10">
        <div class="well">
          <h4>{{service.name}}</h4>
          <span>Duration: {{service.duration}}</span><br />
          <p>{{service.description}}</p>
        </div>
      </div>
    </div>
  `
})

export class ServiceListComponent{
  @Input() services!:IService[]
}
