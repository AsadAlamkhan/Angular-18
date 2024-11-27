import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constant/constant';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  public onChangedRole$: Subject<string> = new Subject<string>;
  public role$: BehaviorSubject<string> = new BehaviorSubject<string>("");

  // apiURL: string = 'https://projectapi.gerasim.in/api/complaint/';

  constructor(private http: HttpClient) {}
    getAllDept(){
      return this.http.get(Constant.API_URL+Constant.DEPARTMENT_METHODS.GET_PARENT_DEPT);
    }

    // saveNewDept(obj: any){
    //   return this.http.post("https://projectapi.gerasim.in/api/complaint/AddNewDepartment",obj);
    // }
      saveNewDept(obj: any){
      return this.http.post(`${Constant.API_URL}${Constant.DEPARTMENT_METHODS.ADD_NEW_DEPT}`,obj);
    }
   
}
