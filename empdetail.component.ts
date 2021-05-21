import { Component, OnInit } from '@angular/core';
import { EmployeeServicesService } from '../employee-services.service';
import { Subscription} from 'rxjs';
@Component({
  selector: 'app-empdetail',
  templateUrl: './empdetail.component.html',
  styleUrls: ['./empdetail.component.scss']
})
export class EmpdetailComponent implements OnInit {
  employee:any[];

  constructor(private _employeeservice:EmployeeServicesService ) { }

  ngOnInit() {
     this._employeeservice.getEmployeelist()
     .subscribe(data=>this.employee=data);
  }

}

