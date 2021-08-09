import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormComponent } from './pages/dynamic-form/dynamic-form.component';
import { UsingTemplateComponent } from './pages/using-template/using-template.component';

const routes: Routes = [{
  path:'',
  component: UsingTemplateComponent
},{
  path: 'dynamic',
  component: DynamicFormComponent
}];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicFormBuilderRoutingModule { }
