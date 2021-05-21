import { Component, OnInit } from '@angular/core';
import { EmployeeServicesService } from '../employee-services.service';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.scss']
})
export class EmplistComponent implements OnInit {
  employee:any[];
  constructor(private _employeeservice:EmployeeServicesService) { }

  ngOnInit() {
    this.employee= this._employeeservice.getEmployeelist();
  }

}
