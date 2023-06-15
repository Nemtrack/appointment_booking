import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable()
export class CompanyService{
  getCompanies(){
    let subject = new Subject()
    setTimeout(() => {subject.next(COMPANIES); subject.complete(); },
      100)
    return subject
  }

  getCompany(id:number){
    return COMPANIES.find(company => company.id === id)
  }

}

const COMPANIES = [
  {
    id: 1,
    name: 'Angular Enterprise',
    address: 'Kazincbarcika',
    businessHours: '12:00 - 16:00',
    works: 4,
    services: [
      {
        id: 1,
        name: 'Dentist',
        description: 'Pull your teeth out with our dentist service!',
        duration: '30 minutes'
      },
      {
        id: 2,
        name: 'Soccer',
        description: 'Play soccer on our field!',
        duration: '90 minutes'
      }
    ]
  },
  {
    id: 2,
    name: 'Workshop Company',
    address: 'Miskolc',
    businessHours: '08:00 - 14:00',
    works: 6,
    services: [
      {
        id: 1,
        name: 'Soccer',
        description: 'Play soccer on the field!',
        duration: '100 minutes'
      },
      {
        id: 2,
        name: 'Workshop',
        description: 'Work on your project in our workshop',
        duration: '40 minutes'
      }
    ]
  }
]
