import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GetcategoryComponent } from './components/getcategory/getcategory.component';
import { PostcategoryComponent } from './components/postcategory/postcategory.component';
import { UpdatecategoryComponent } from './components/updatecategory/updatecategory.component';
import { DeletecategoryComponent } from './components/deletecategory/deletecategory.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GetcategoryComponent,
    PostcategoryComponent,
    UpdatecategoryComponent,
    DeletecategoryComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [GetcategoryComponent]
})
export class AppModule { }
