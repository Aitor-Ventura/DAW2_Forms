import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from "./material/material.module";
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeService } from './shared/employee.service';
import { environment } from "../environments/environment";
import { DepartmentService } from './shared/department.service';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [EmployeeService, DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
