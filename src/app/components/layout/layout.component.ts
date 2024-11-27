import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DepartmentService } from '../../service/department.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  selectedRole: string = '';

  router = inject(Router);
  loggedUserdata: any;
  constructor(private despservc: DepartmentService){
    const logdata = localStorage.getItem('loginUser');
    if(logdata != null){
      this.loggedUserdata = JSON.parse(logdata);
    }
  }
  logout(){
    localStorage.removeItem('loginUser');
    this.router.navigateByUrl("adminlogin");
  }
  onChangeRole(role: string){
    debugger;
    this.despservc.onChangedRole$.next(role);
    this.despservc.role$.next(role);
  }

}
