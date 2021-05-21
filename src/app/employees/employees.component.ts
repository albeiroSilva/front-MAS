import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'contractTypeName', 'roleId', 'roleName', 'roleDescription', 'hourlySalary', 'monthlySalary', 'calculatedAnnualSalary'];
  dataSource = new MatTableDataSource<Employee>();

  valor: string = '';

  employees:Employee[] = [];
  employeesS:Employee[] = [];
  employe: Employee = new Employee();

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  listEmployees(){
    this.employeeService.listar().subscribe(
      employees => {
        this.dataSource.data = employees as Employee[];
        
      });
  }

  viewEmployeeById(id: string){
    this.employeeService.ver(id).subscribe(
      employe => {
        this.dataSource.data = this.employeesS.concat(employe as Employee) ;
        console.log( this.dataSource.data);
      });
  }

  search(){
    if (this.valor === '') {
      this.listEmployees();
    }else{
      this.viewEmployeeById(this.valor);
    }
  }

}

export interface EmployeeI {
  id: number;
  name: string;
  contractTypeName: string;
  roleId: number;
  roleName: string;
  roleDescription: string;
  hourlySalary: number;
  monthlySalary: number;
  calculatedAnnualSalary: number;

}

const ELEMENT_DATA: EmployeeI[] = [
  {id: 1, name: 'pepe', contractTypeName: 'hour', roleId: 4, 
  roleName:'boss', roleDescription:'roledes', hourlySalary:5, monthlySalary:4, calculatedAnnualSalary:1}
];

