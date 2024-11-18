import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {
  DayNumber = '';
  cityArray: string [] = ['Karachi','Islamabad','RawalPindi','Swat', 'Matta'];
  studentlist: any[]=[
    {id:1,Name:'Asad',city:'Islamabad',isactive:false},
    {id:2,Name:'Ajmal',city:'Karachi',isactive:true},
    {id:3,Name:'Wali',city:'Swat',isactive:true},
    {id:4,Name:'Adil',city:'Rawalpindi',isactive:true},
    {id:5,Name:'Naqash',city:'Kashmir',isactive:true},
    {id:6,Name:'Zaran',city:'Matta',isactive:false}
  ]
}
