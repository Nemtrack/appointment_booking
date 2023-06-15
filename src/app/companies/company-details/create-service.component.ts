import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { IService } from "../shared/company.model";

@Component({
  selector: 'create-service',
  templateUrl: './create-service.component.html',
  styles: [`
    em { float: right; color:#E05C65; padding-left: 10px; }
    .error input, .error textarea { background-color:#E3C3C5; }
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})

export class CreateServiceComponent implements OnInit{
  @Output() saveNewService = new EventEmitter()
  @Output() cancelAddService = new EventEmitter()
  newServiceForm!: FormGroup
  name!: FormControl
  duration!: FormControl
  description!: FormControl

  ngOnInit(): void {
    this.name = new FormControl('', Validators.required)
    this.duration = new FormControl('', Validators.required)
    this.description = new FormControl('', [Validators.required,
      Validators.maxLength(400)])

    this.newServiceForm = new FormGroup({
      name: this.name,
      duration: this.duration,
      description: this.description
    })
  }

  saveService(formValues:any){
    let service:IService = {
      id:undefined,
      name: formValues.name,
      description: formValues.description,
      duration: formValues.duration
    }
    this.saveNewService.emit(service)
  }

  cancel(){
    this.cancelAddService.emit()
  }
}
