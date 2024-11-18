import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-structural-dir',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-dir.component.html',
  styleUrl: './structural-dir.component.css'
})
export class StructuralDirComponent {
isDiv1Visible: boolean = true;
isDiv2Visible: boolean = false;
num1 = '';
num2 = '';
isActive = false;
selectedState = '';
cityArray: string [] = ['Karachi','Islamabad','RawalPindi','Swat', 'Matta'];
studentlist: any[]=[
  {id:1,Name:'Asad',city:'Islamabad',isactive:false},
  {id:2,Name:'Ajmal',city:'Karachi',isactive:true},
  {id:3,Name:'Wali',city:'Swat',isactive:true},
  {id:4,Name:'Adil',city:'Rawalpindi',isactive:true},
  {id:5,Name:'Naqash',city:'Kashmir',isactive:true},
  {id:6,Name:'Zaran',city:'Matta',isactive:false}
]

constructor(private router:Router){

}

GoToAttribute(){
this.router.navigateByUrl("attribute");
}

showDiv1(){
  this.isDiv1Visible = true;
}
hideDiv1(){
  this.isDiv1Visible = false;
}
toggleDiv2(){
  this.isDiv2Visible = !this.isDiv2Visible;
  // if(this.isDiv2Visible == true){
  //   this.isDiv2Visible = false;
  // }else{
  //   this.isDiv2Visible = true;
  // }
}
}
