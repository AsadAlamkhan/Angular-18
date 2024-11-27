import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AlertComponent } from '../../../reusableComponent/alert/alert.component';

@Component({
  selector: 'app-viewchild',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css'
})
export class ViewchildComponent implements AfterViewInit {
  @ViewChild('txt') Demtxt?: ElementRef;
  @ViewChild(AlertComponent) alrtCmp?: AlertComponent;

  ngAfterViewInit(): void {
    const DemoVal = this.Demtxt?.nativeElement.value;
    const alrt = this.alrtCmp?.DemoAlrt;
  }

}
