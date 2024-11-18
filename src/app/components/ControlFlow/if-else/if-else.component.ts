import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-if-else',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})
export class IfElseComponent {
  isDiv1Visible: boolean = false;
  isDiv2Visible: boolean = true;
  num1 = '';
  num2 = '';
  isActive = false;
  selectedstatus = '';
  
  
  constructor(private router:Router){
  
  }
  
  
  showDiv1(){
    this.isDiv1Visible = true;
  }
  hideDiv1(){
    this.isDiv1Visible = false;
  }
  toggleDiv2(){
    this.isDiv2Visible = !this.isDiv2Visible;    
  }
}
