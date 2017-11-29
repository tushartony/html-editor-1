import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-component',
  templateUrl: './directive-component.component.html',
  styleUrls: ['./directive-component.component.css']
})
export class DirectiveComponentComponent implements OnInit {
  
  
  public Employees : any[] =[
     {code:"emp1",name:"alosiyus",gender:"male",annualSalary:10000},
     {code:"emp2",name:"alosiyus1",gender:"male",annualSalary:10010},
     {code:"emp3",name:"alosiyus2",gender:"male",annualSalary:10020},
     {code:"emp4",name:"alosiyus3",gender:"male",annualSalary:10030},
     {code:"emp5",name:"alosiyus4",gender:"male",annualSalary:10040},
     ];
  

  ngOnInit() {
  }

}
