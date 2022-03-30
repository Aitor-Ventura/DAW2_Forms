import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { DepartmentService } from '../../shared/department.service';
import { NotificationService } from '../../shared/notification.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService, public departmentService: DepartmentService, public notificationService: NotificationService) { }

  ngOnInit(): void {
    this.service.getEmployees();
  }

  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.notificationService.success('::Submitted successfully!');
  }

  onSubmit(){
    if (this.service.form.valid){
      this.service.addEmployee(this.service.form.value);
      this.onClear();
      this.notificationService.success('::Submitted successfully!');
    }
  }
}
