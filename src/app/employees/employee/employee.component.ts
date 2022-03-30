import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { DepartmentService } from '../../shared/department.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService, public departmentService: DepartmentService) { }

  ngOnInit(): void {
    this.service.getEmployees();
  }

  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

  onSubmit(){
    if (this.service.form.valid){
      this.service.addEmployee(this.service.form.value);
      this.onClear();
    }
  }
}
