import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../service/department.service';
import { AlertComponent } from '../../../reusableComponent/alert/alert.component';
import { MyButtonComponent } from '../../../reusableComponent/my-button/my-button.component';
import { Department } from '../../../model/class/customer';

@Component({
  selector: 'app-post-api',
  standalone: true,
  imports: [FormsModule, AlertComponent, MyButtonComponent],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css'
})
export class PostApiComponent implements OnInit {

  constructor(private deptSrv: DepartmentService) { }

  DeptObj: Department = new Department();

  DeptList: any[] = [];

  http = inject(HttpClient);

  ngOnInit(): void {
    this.getDepartment();
  }

  getData(data: any) {
    debugger;
  }
  // onSave(){

  //   this.http.post("https://projectapi.gerasim.in/api/complaint/AddNewDepartment",this.DeptObj).subscribe((res:any)=>{

  //     if(res.result){
  //       alert("Department has been Save Successfully");
  //       this.getDepartment();
  //     }else{
  //       alert(res.message);
  //     }
  //   })
  // }

  onSave() {
    this.deptSrv.saveNewDept(this.DeptObj).subscribe((res: any) => {
      if (res.result) {
        alert("Department has been Save Successfully");
        this.getDepartment();
      } else {
        alert(res.message);
      }
    })
  }

  onUpdate() {

    this.http.post("https://projectapi.gerasim.in/api/complaint/UpdateDepartment", this.DeptObj).subscribe((res: any) => {

      if (res.result) {
        alert("Department has been Update Successfully");
        this.getDepartment();
      } else {
        alert(res.message);
      }
    })
  }

  onEdit(data: any) {
    this.DeptObj = data;
  }

  // getDepartment(){

  //   this.http.get("https://projectapi.gerasim.in/api/complaint/GetParentDepartment").subscribe((res:any)=>{

  //     this.DeptList = res.data;
  //   })
  // }

  onDelete(Id: number) {
    const isDelete = confirm("Are you sure want to delete this record ?");
    if (isDelete) {
      this.http.delete("https://projectapi.gerasim.in/api/complaint/DeletedepartmentBydepartmentId?departmentId=" + Id).subscribe((res: any) => {
        if (res.result) {
          alert("Department has been Deleted Successfully");
          this.getDepartment();
        } else {
          alert(res.message);
        }
      })
    }
  }

  getDepartment() {
    debugger;
    this.deptSrv.getAllDept().subscribe((res: any) => {
      debugger;
      this.DeptList = res.data;
    })
  }

}
