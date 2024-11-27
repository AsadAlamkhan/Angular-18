import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  standalone: true,
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})
export class SignalComponent {
  firstName = signal("Asad");
  lastName = signal("Alam");

  fullName = computed(()=> this.firstName() +" "+this.lastName());

  rollNo = signal<number>(123);

  cityList = signal(["Islamabad","Swat"]);
  studentObj = signal({
    name: "Asad",
    city: "Swat"
  });

  ChangeName(){
    this.firstName.set("Zaran");
  }

  ChangeLastName(){
    this.lastName.set("Khan");
  }
  addCity(){
    this.cityList.set([...this.cityList(),"Pindi"]);
  }
  changeCity(){
    this.studentObj.set({...this.studentObj(),city:"Islamabad"});
  }

}
