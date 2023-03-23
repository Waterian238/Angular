import { Component } from '@angular/core';
import { Employee } from './employee';
import { EMPLOYEES } from '../employee-list';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

Employee=EMPLOYEES;
selectedEmployee?:Employee;

Onselect(employee:Employee):void{
  this.selectedEmployee=employee;
}
}
