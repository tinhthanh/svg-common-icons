import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { commonIconsArtist, CommonIconsModule, CommonIconsService } from 'projects/common-icons/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
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
