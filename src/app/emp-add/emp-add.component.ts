import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-emp-add',
  templateUrl: './emp-add.component.html',
  styleUrls: ['./emp-add.component.css']
})
export class EmpAddComponent implements OnInit {

  angForm: FormGroup; 

  constructor(private fb: FormBuilder, private empService: EmployeeService) {
    console.log('cons');
    this.createForm();
   }

   createForm() {
    this.angForm = this.fb.group({
      emp_no: ['', Validators.required ],
      emp_name: ['', Validators.required ],
      emp_designation: ['', Validators.required ]
    });
   }

   addEmployee(emp_no, emp_name, emp_designation) {
      console.log('Add Employee Service is called in EmpAddComponent');
      this.empService.addEmployee(emp_no, emp_name, emp_designation);
   }

  ngOnInit() {
  }

}
