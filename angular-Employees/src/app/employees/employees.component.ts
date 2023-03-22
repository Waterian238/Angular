import { Component } from '@angular/core';
import { Employee } from './employee';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {
employee:Employee={
  id:1,
  name:'Dewald',
  surname:'Rinke'
}
}