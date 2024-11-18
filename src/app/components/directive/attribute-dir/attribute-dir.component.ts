import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-attribute-dir',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './attribute-dir.component.html',
  styleUrl: './attribute-dir.component.css'
})
export class AttributeDirComponent {
  Div1bgcolor='bg-success';
  isDiv2Active: boolean = false;
  num1 = '';
  num2 = '';
  isActive = false;
  selectedState = '';
  cityArray: string [] = ['Karachi','Islamabad','RawalPindi','Swat', 'Matta'];
  studentlist: any[]=[
    {id:1,totalmarks:50,gender:'Male',Name:'Asad',city:'Islamabad',isactive:false},
    {id:2,totalmarks:64,gender:'Male',Name:'Ajmal',city:'Karachi',isactive:true},
    {id:3,totalmarks:99,gender:'Male',Name:'Wali',city:'Swat',isactive:true},
    {id:4,totalmarks:96,gender:'Male',Name:'Adil',city:'Rawalpindi',isactive:true},
    {id:5,totalmarks:88,gender:'Male',Name:'Naqash',city:'Kashmir',isactive:true},
    {id:6,totalmarks:95,gender:'Female',Name:'Arsh',city:'Matta',isactive:false}
  ]
  customstyle: any={
    'color':'white',
    'background-color':'red',
    'width':'200px',
    'height':'200px',
    'border-radius':'30%',
    'text-align':'center'
  }
  
 addRedClass(){
  this.Div1bgcolor = 'bg-danger';
 } 
 addblueClass(){
  this.Div1bgcolor = 'bg-primary';
 }
 ToggleDiv2Class(){
  this.isDiv2Active = !this.isDiv2Active;
 }
 
}
