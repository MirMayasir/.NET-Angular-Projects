import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { EmpListComponent } from './Employees/emp-list/emp-list.component';
import { EmpAddComponent } from './Employees/emp-add/emp-add.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { FilterComponent } from './filter/filter.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path: 'home' , component:HomePageComponent},
  {path: 'emplist', component: EmpListComponent},
  {path: 'register', component: EmpAddComponent},
  {path: "Customers", component:CustomerListComponent},
  {path: "addCustomer", component:AddCustomerComponent},
  {path: "deleteCustomer", component:DeleteUserComponent},
  {path: "customerupdate/:id", component:UpdatecustomerComponent},
  {path: "fliter-customer", component:FilterComponent},
  {path: "login", component:LoginComponent},
  {path: "signup", component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
