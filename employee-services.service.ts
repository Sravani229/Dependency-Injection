import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServicesService {

  constructor() { }

  getEmployeelist(){
    return [
      "Sravani",28,'F'

    ];
  }
}
