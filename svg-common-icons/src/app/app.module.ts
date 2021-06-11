import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { commonIconsArtist, CommonIconsModule, CommonIconsService } from 'projects/common-icons/src/public-api';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './solution-step/parent/parent.component';
import { ChilNComponent } from './solution-step/chil-n/chil-n.component';
import { ChilZComponent } from './solution-step/chil-z/chil-z.component';
import { PlaceholderDirective } from './placeholder.directive';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ParentComponent,
    ChilNComponent,
    ChilZComponent,
    PlaceholderDirective
  ],
  imports: [
    BrowserModule,
    CommonIconsModule,
    FormsModule,
    CommonModule
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
