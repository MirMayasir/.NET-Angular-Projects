import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BookflightComponent } from './bookflight/bookflight.component';
import { DisplayflightComponent } from './displayflight/displayflight.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminMessageComponent } from './admin-message/admin-message.component';
import { HomeComponent } from './home/home.component';
import {Fcity,Dcity} from './filter';
import { ConfirmBookingComponent } from './confirm-booking/confirm-booking.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { TopFlightRoutesComponent } from './top-flight-routes/top-flight-routes.component';
import { TravelBlogsComponent } from './travel-blogs/travel-blogs.component';
import { DestinationCardsComponent } from './travel-blogs/destination-cards/destination-cards.component';
import { LatestBlogsComponent } from './travel-blogs/latest-blogs/latest-blogs.component';
import { HeroSectionComponent } from './travel-blogs/hero-section/hero-section.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FooterComponent } from './Footer/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BookflightComponent,
    DisplayflightComponent,
    ContactusComponent,
    AdminMessageComponent,
    HomeComponent,
    Fcity,
    Dcity,
    ConfirmBookingComponent,
    TopFlightRoutesComponent,
    TravelBlogsComponent,
    AboutSectionComponent,
    HeroSectionComponent,
    DestinationCardsComponent,
    LatestBlogsComponent,
    LoginComponent,
    SignupComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
