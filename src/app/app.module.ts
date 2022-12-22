import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { HttpClientModule } from '@angular/common/http';
import { TestModule } from 'src/test/test.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Decorator
@NgModule({
  //Declarations array is where you declare components that belong in this module
  declarations: [
    AppComponent,
    SearchbarComponent
  ],
  //imports array is to import other modules you depend on
  //This is your dependencies list 
  //analogous to using __insert_namespace_here__
  imports: [
    TestModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],

  //if you want to inject a service at the module level
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
