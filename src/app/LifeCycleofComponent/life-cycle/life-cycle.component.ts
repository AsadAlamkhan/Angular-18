import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.css'
})
export class LifeCycleComponent implements OnInit, DoCheck, OnChanges, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy {
  constructor(){
    console.log("Constructor is execute first");
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges we use in reusable component");
  }

  ngOnInit(): void {
    console.log("after constructor ngOnint is execute, Normally we use ngOnInt for API Calls");
  }
  ngDoCheck(): void {
    console.log("when we change detection this function is called");
  }
  ngAfterViewInit(): void {
    console.log("in our component if we intigrate external view, or imae after initialize this function is called=> ngAfterViewInit");
  }

  ngAfterViewChecked(): void {
    console.log("in our component if we intigrate external view, or imae after initialize this function is called=> ngAfterViewChecked");
  }

  ngAfterContentInit(): void {
    console.log("after initializing view this function is execute");
  }
  ngAfterContentChecked(): void {
    console.log("after initializing view this function is execute, ngAfterContentChecked");    
  }
  ngOnDestroy(): void {
    console.log("when our component is destroy, before the destroy this function is execute, normally we use for unsubscribe API calls");
    
  }

}
