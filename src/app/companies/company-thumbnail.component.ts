import { Component, Input } from '@angular/core'

@Component ({
  selector: 'company-thumbnail',
  template: `
  <div [routerLink]="['/companies', company.id]" class = "well hoverwell thumbnail">
    <h2>{{company?.name}}</h2>
    <div>Address: {{company?.address}}</div>
    <div>Business Hours: {{company?.businessHours}}</div>
    <div>Works: {{company?.works}}</div>
  </div>
`,
  styles: [`
  .well div { color : lightgrey; }
  .thumbnail { min-height: 150px; }
  `]
})

export class CompanyThumbnailComponent{
  @Input() company:any
}
