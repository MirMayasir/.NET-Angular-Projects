import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import ProfileComponent from './profile/profile.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from 'src/Guard/auth.guard';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "book-appointment", component: BookAppointmentComponent, canActivate:[AuthGuard] },
  { path: "history", component: HistoryComponent, canActivate:[AuthGuard]},
  {path: "profile", component:ProfileComponent, canActivate:[AuthGuard]},
  {path: "login", component:LoginComponent},
  {path: "signin", component:SigninComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
