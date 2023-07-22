import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WheelComponent } from './components/wheel/wheel.component';
import { MenuDialogComponent } from './components/menu-dialog/menu-dialog.component';
import { FormsModule } from '@angular/forms';
import { SectorsComponent } from './components/sectors/sectors.component';

@NgModule({
  declarations: [
    AppComponent,
    WheelComponent,
    MenuDialogComponent,
    SectorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
