import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { commonIconsArtist, CommonIconsModule, CommonIconsService } from 'projects/common-icons/src/public-api';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './solution-step/parent/parent.component';
import { ChilNComponent } from './solution-step/chil-n/chil-n.component';
import { ChilZComponent } from './solution-step/chil-z/chil-z.component';
import { PlaceholderDirective } from './placeholder.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PhoneMaskDirective } from './directives/phone-mask.directive';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    ChilNComponent,
    ChilZComponent,
    PlaceholderDirective,
    PhoneMaskDirective
  ],
  imports: [
    BrowserModule,
    CommonIconsModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{
      path: 'form',
      loadChildren: () => import('../app/modules/dynamic-form-builder/dynamic-form-builder.module').then(m => m.DynamicFormBuilderModule),
    }])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ChilNComponent, ChilZComponent]
})
export class AppModule { 
  constructor(private commonIconService: CommonIconsService) {
    this.commonIconService.registerIcons( [
       commonIconsArtist
    ]);
  }
}
