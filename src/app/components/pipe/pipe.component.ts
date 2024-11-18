import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';
import { NaPipe } from '../pipes/na.pipe';

@Component({
  selector: 'app-pipe',
  standalone: true,
  imports: [NaPipe,AsyncPipe,JsonPipe,DatePipe, UpperCasePipe, LowerCasePipe, TitleCasePipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
  firstname = 'Angular';
  lastname = 'this is the test sentence to upper case first letter';
  currentdate: Date = new Date();

  student: any = {
    name: 'Asad',
    city: 'Swat',
    state:'',
    id: '190156'
  };
  currenttime: Observable<Date> = new Observable<Date>;

  constructor(){
    this.currenttime = interval(1000).pipe(map(() => new Date()));
  }

}

