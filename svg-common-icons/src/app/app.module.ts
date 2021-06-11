import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { commonIconsArtist, CommonIconsModule, CommonIconsService } from 'projects/common-icons/src/public-api';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    CommonIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private commonIconService: CommonIconsService) {
    this.commonIconService.registerIcons( [
       commonIconsArtist
    ]);
  }
}
