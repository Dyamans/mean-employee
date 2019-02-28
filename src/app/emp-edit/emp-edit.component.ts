import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emp-edit',
  templateUrl: './emp-edit.component.html',
  styleUrls: ['./emp-edit.component.css']
})
export class EmpEditComponent implements OnInit {

  angForm: FormGroup;
  emp: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private empService: EmployeeService, private fb: FormBuilder) {
      this.createForm();
    }

    createForm() {
      this.angForm = this.fb.group({
          emp_no: ['', Validators.required ],
          emp_name: ['', Validators.required ],
          emp_designation: ['', Validators.required ]
      });
    }

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.empService.editEmployee(params['id']).subscribe( res => {
            this.emp = res;
        });
    });
  }

  updateEmployee(emp_no, emp_name, emp_designation) {
    this.route.params.subscribe(params => {
        this.empService.updateEmployee(emp_no, emp_name, emp_designation, params['id']);
        this.router.navigate(['/']);
    });
  }
}
