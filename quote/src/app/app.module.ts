import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"

import { AppComponent } from '../app/app.component';
import { FormComponent } from '../app/form/form.component';
import { DetailsComponent } from './details/details.component';
import { QuoteComponent } from './quote/quote.component';
import { Keys } from './keys';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DetailsComponent,
    QuoteComponent,
    Keys
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }