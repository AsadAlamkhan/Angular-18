import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from '../../../reusableComponent/alert/alert.component';
import { MyButtonComponent } from '../../../reusableComponent/my-button/my-button.component';
import { Customer } from '../../../model/class/customer';
import { IUser } from '../../../model/interface/IUser';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [AlertComponent,MyButtonComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {

  // userlist: any [] = [];
  userlist: IUser []= [];
  customerlist: any [] = [];
  
  customerlist1: Customer [] = [];
  alertMsg="";

  constructor(private http: HttpClient){

  }

  changeMsg(){
    this.alertMsg='Asad';
  }
  // GetAllUsers(){
  //   this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
  //     this.userlist = res;
  //   });
  // }
  GetAllUsers(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((res:any)=>{
      this.userlist = res;
    });
  }
  GetAllCustomers(){
    debugger
    this.http.get("https://projectapi.gerasim.in/api/PropertyBookingController/GetAllCustomer").subscribe((result:any)=>{
      debugger;
      this.customerlist1 = result.data;
    },error=>{
      debugger;
    });
  }

  GetAllCustomer(){
    debugger
    this.http.get("https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers").subscribe((result:any)=>{
      debugger;
      this.customerlist = result.data;
    },error=>{
      debugger;
    });
  }
}
