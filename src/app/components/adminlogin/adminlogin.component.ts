import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
  userObj: any = {
    userName:'',
    password:''
  };
  router = inject(Router);
  http = inject(HttpClient);
  onLogin(){
    debugger;
    this.http.post("https://projectapi.gerasim.in/api/Complaint/login", this.userObj).subscribe((res: any)=>{
      if(res.result){
        localStorage.setItem('loginUser', JSON.stringify(res.data));
        this.router.navigateByUrl("add-emp");
      }else{
        alert(res.message);
      }
    })
  }
  // onLogin(){
  //   if(this.userObj.userName == 'admin' && this.userObj.password == "1234"){
  //     localStorage.setItem('loginUser',this.userObj.userName);
  //     this.router.navigateByUrl("add-emp");
  //   }else{
  //     alert("wrong credintials");
  //   }
  // }
}
