import { Component, OnInit } from '@angular/core';
import { EmployeeService} from '../appcomponent.service'
@Component({
  selector: 'app-employee-details',
  template: `<h2>Employee details</h2>
             <ul *ngFor="let employee of employees">
             <li>{{employee.name}}.{{employee.gender}}
             </li>
             </ul>`,
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employees= [];
  constructor( private _employeeService : EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe(resEmployeeData => this.employees=resEmployeeData);
  }

}
