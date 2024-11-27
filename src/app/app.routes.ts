import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { StructuralDirComponent } from './components/directive/structural-dir/structural-dir.component';
import { AttributeDirComponent } from './components/directive/attribute-dir/attribute-dir.component';
import { IfElseComponent } from './components/ControlFlow/if-else/if-else.component';
import { ForComponent } from './components/ControlFlow/for/for.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { TemplateFormComponent } from './components/forms/template-form/template-form.component';
import { ReactiveFormComponent } from './components/forms/reactive-form/reactive-form.component';
import { GetApiComponent } from './components/apiintegrations/get-api/get-api.component';
import { PostApiComponent } from './components/apiintegrations/post-api/post-api.component';
import { LifeCycleComponent } from './LifeCycleofComponent/life-cycle/life-cycle.component';
import { NgtemplateComponent } from './components/directive/ngtemplate/ngtemplate.component';
import { NgcontainerComponent } from './components/directive/ngcontainer/ngcontainer.component';
import { ViewchildComponent } from './components/decorator/viewchild/viewchild.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { LayoutComponent } from './components/layout/layout.component';
import { authGuard } from './service/auth.guard';
import { SignalComponent } from './components/signal/signal/signal.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'adminlogin',
        pathMatch:'full'
    },
    {
        path:'adminlogin',
        component:AdminloginComponent
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'add-emp',
                component:AddEmployeeComponent
            },
            {
                path:'data-binding',
                component:DataBindingComponent,
                canActivate:[authGuard]
            },
            {
                path:'emp-list',
                component:EmployeeListComponent
            },
            {
                path:'structural-dir',
                component:StructuralDirComponent
            },
            {
                path:'attribute',
                component:AttributeDirComponent
            },
            {
                path:'if-else',
                component:IfElseComponent
            },
            {
                path:'for',
                component:ForComponent
            },
            {
                path:'pipe',
                component:PipeComponent
            },
            {
                path:'template-form',
                component:TemplateFormComponent
            },
            {
                path:'reactive-form',
                component:ReactiveFormComponent
            },
            {
                path:'get-api',
                component:GetApiComponent
            },
            {
                path:'post-api',
                component:PostApiComponent
            },
            {
                path:'life-cycle',
                component:LifeCycleComponent
            },
            {
                path:'ng-template',
                component:NgtemplateComponent
            },
            {
                path:'ng-container',
                component:NgcontainerComponent
            },
            {
                path:'viewchild',
                component:ViewchildComponent
            },
            {
                path:'signal',
                component:SignalComponent
            }
        ]
    },
    
];
