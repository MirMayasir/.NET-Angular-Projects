import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { EmpListComponent } from './Employees/emp-list/emp-list.component';
import { EmpAddComponent } from './Employees/emp-add/emp-add.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import {HttpClientModule} from '@angular/common/http';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { FilterComponent } from './filter/filter.component';
import { CustCity,CustID} from './customerpipes';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EmpListComponent,
    EmpAddComponent,
    CustomerListComponent,
    AddCustomerComponent,
    DeleteUserComponent,
    UpdatecustomerComponent,
    FilterComponent,
    CustCity,
    CustID,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
