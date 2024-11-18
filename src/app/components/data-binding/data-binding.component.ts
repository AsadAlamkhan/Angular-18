import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  Employee: string = "Asad";
  stateName = "Swat";
  inputType = "text";
  type = "number";
  rollNo: number = 123;
  rollNonew = 456;
  isPakistani: boolean = true;
  currentDate: Date = new Date();
  MyClass = "bg-info";
  lastName = signal("Khan");

  constructor(){

  }
  changeEmployeeName(){
    this.Employee = "Wali Ullah";
    this.lastName.set("Alam");
  }

  ShowAlert(message: string){
    alert(message);

  }

}
