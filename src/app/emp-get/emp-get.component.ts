import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-get',
  templateUrl: './emp-get.component.html',
  styleUrls: ['./emp-get.component.css']
})
export class EmpGetComponent implements OnInit {
  emps: Employee[] = null;

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.getEmployees();
  }

  deleteEmployee(id: string) {
    console.log(id);
    this.empService.deleteEmployee(id).subscribe(res => {
      this.getEmployees();
      console.log('Deleted');
    });
  }

  getEmployees() {
    this.empService
      .getEmployees()
      .subscribe((data: Employee[]) => {
        this.emps = data;
       });
  }

}
