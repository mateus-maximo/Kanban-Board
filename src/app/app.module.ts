import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotStartedComponent } from './components/not-started/not-started.component';
import { InProgressComponent } from './components/in-progress/in-progress.component';
import { CompletedComponent } from './components/completed/completed.component';
import { FormsModule } from '@angular/forms';
import { AutoFocusDirective } from './diretivas/autofocus.directive';

@NgModule({
  declarations: [
    AppComponent,
    NotStartedComponent,
    InProgressComponent,
    CompletedComponent,
    AutoFocusDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
