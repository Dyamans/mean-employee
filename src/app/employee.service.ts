import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../environments/environment';
import { Employee } from './Employee';


const BACKEND_URL = environment.apiUrl + '/employees/';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private emps: Employee[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  addEmployee(emp_no: string, emp_name: string, emp_designation: string) {
    const empData = {
      emp_no: emp_no,
      emp_name: emp_name,
      emp_designation: emp_designation
    };

    this.http.post<{message: string, emp: Employee}>(BACKEND_URL, empData).
    subscribe((responseData) => {
      const emp: Employee = {
        _id: responseData.emp._id,
        emp_no: responseData.emp.emp_no,
        emp_name: responseData.emp.emp_name,
        emp_designation: responseData.emp.emp_designation
      };
      this.emps.push(emp);
      this.router.navigate(['/']);
    });
  }

  getEmployees() {
    return this
           .http
           .get(`${BACKEND_URL}`);
  }

  editEmployee(id) {
    return this.http.get(`${BACKEND_URL}/${id}`);
  }

  updateEmployee(emp_no: number, emp_name: string, emp_designation: string, id) {
    const emp: Employee = {_id: id, emp_no: emp_no, emp_name: emp_name, emp_designation: emp_designation};
    this.http.put(`${BACKEND_URL + id}`, emp).subscribe(res => console.log('Done.'));
  }

  deleteEmployee(empId: string) {
    return this.http.delete(BACKEND_URL + empId);
  }

}
