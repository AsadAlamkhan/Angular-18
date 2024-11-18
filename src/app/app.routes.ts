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

export const routes: Routes = [
    {
        path:'add-emp',
        component:AddEmployeeComponent
    },
    {
        path:'data-binding',
        component:DataBindingComponent
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
    }
];
