import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../appcomponent.service';
@Component({
  selector: 'app-employee-list',
  template: `<h2>Employee List</h2>
             <ul *ngFor="let employee of employees">
                <li>{{employee.name}}
                </li>
            </ul>`,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

   employees = [];
  constructor( private _employeeService : EmployeeService) { }

  ngOnInit() {

    this._employeeService.getEmployees()
            .subscribe(resEmployeeData => this.employees=resEmployeeData);
  }

}
