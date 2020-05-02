import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormFormArrayComponent } from './reactive-form-form-array/reactive-form-form-array.component';
import { ReactiveFormArticleComponent } from './reactive-form-article/reactive-form-article.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ReactiveFormFormArrayComponent,
    ReactiveFormArticleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
