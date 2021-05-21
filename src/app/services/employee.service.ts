import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

 
  private baseEndPonint = 'https://masglobalconsulting.herokuapp.com/api/employees/';
  constructor(private http: HttpClient) { }

  public listar(): Observable<Employee[]>{
    return this.http.get(this.baseEndPonint).pipe(
      map(employees => employees as Employee[])
    );
  }
  

  public ver(id: string): Observable<Employee>{
    console.log(id);
    return  this.http.get(this.baseEndPonint.concat(id)).pipe(
      map(employee => employee as Employee)
      
    );
  }

}
