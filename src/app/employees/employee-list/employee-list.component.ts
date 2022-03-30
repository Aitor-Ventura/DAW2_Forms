import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DepartmentService } from '../../shared/department.service';
import { EmployeeService } from '../../shared/employee.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EmployeeComponent } from '../employee/employee.component';
import { NotificationService } from '../../shared/notification.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public service: EmployeeService, public departmentService: DepartmentService, public dialog: MatDialog,
    public notificationService: NotificationService) { }

  listData!: MatTableDataSource<any>;
  displayedColumns: string[] = ['fullName', 'email', 'mobile', 'city', 'departmentName', 'isPermanent', 'actions'];
  @ViewChild (MatSort) sort!: MatSort;
  @ViewChild (MatPaginator) paginator!: MatPaginator;
  searchKey!: string;

  ngOnInit(): void {
    this.service.getEmployees().subscribe(
      list => {
        let array = list.map(item => {
          let departmentName = this.departmentService.getDepartmentName(item.payload.val()['department']);
          return {
            $key: item.key,
            departmentName,
            ...item.payload.val()
          };
        });
        this.listData = new MatTableDataSource(array);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      }
    );
  }

  onSearchClear(){
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter(){
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  onCreate(){
    this.service.initializeFormGroup();
    this.openDialog();
  }

  onEdit(row){
    this.service.populateForm(row);
    this.openDialog();
  }

  openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(EmployeeComponent, dialogConfig);
  }

  onDelete($key){
    if (confirm('Are you sure you want to delete this data?')){
      this.service.deleteEmployee($key);
      this.notificationService.warn('::Deleted successfully!');
    }
  }

  yesNo(boolean){
    return boolean ? 'Yes':'No';
  }
}
