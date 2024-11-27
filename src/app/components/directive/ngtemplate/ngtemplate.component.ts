import { CommonModule } from '@angular/common';
import { Component, TemplateRef, viewChild, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-ngtemplate',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngtemplate.component.html',
  styleUrl: './ngtemplate.component.css'
})
export class NgtemplateComponent {
  IsUserLoggedIn = false;
  UserLoggedName = 'Asad Alam';
  @ViewChild('dynamicTemp') dynamicTemp: TemplateRef<any> | undefined;
  @ViewChild('dynamicConta',{read:ViewContainerRef}) dynamicConta: ViewContainerRef | undefined;
  @ViewChild('dynamicTemp1') dynamicTemp1: TemplateRef<any> | undefined;

  loadTemplate(){
    if(this.dynamicTemp){
      this.dynamicConta?.createEmbeddedView(this.dynamicTemp)
    }
    else if(this.dynamicTemp1){
      this.dynamicConta?.createEmbeddedView(this.dynamicTemp1)
    }
  }

}
