import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicFormBuilderRoutingModule } from './dynamic-form-builder-routing.module';
import { UsingTemplateComponent } from './pages/using-template/using-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './pages/dynamic-form/dynamic-form.component';
import { UsingContentComponent } from './pages/using-template/using-content/using-content.component';
import { TemplateHeaderComponent } from './pages/using-template/components/template-header/template-header.component';
import { TemplateBodyComponent } from './pages/using-template/components/template-body/template-body.component';
import { TemplateFooterComponent } from './pages/using-template/components/template-footer/template-footer.component';


@NgModule({
  declarations: [
    UsingTemplateComponent,
    DynamicFormComponent,
    UsingContentComponent,
    TemplateHeaderComponent,
    TemplateBodyComponent,
    TemplateFooterComponent
  ],
  imports: [
    CommonModule,
    DynamicFormBuilderRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class DynamicFormBuilderModule { }
