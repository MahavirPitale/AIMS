import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { ComplaintsFormComponent } from './complaints-form.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ComplaintsFormComponent
  ],
  bootstrap: [ AppComponent,ComplaintsFormComponent ]
})
export class AppModule { }
