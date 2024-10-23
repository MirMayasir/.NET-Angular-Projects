import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AvailableFlightsService } from 'src/AvailableFlights/available-flights.service';
import { BooikingServiceService } from 'src/BookingService/booiking-service.service';
import { FlightsAvailable } from 'src/Models/availableFlights';
import { Bookings } from 'src/Models/bookings';

@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.component.html',
  styleUrls: ['./confirm-booking.component.css']
})
export class ConfirmBookingComponent implements OnInit {

  fa:FlightsAvailable;
  flightsAvail: FlightsAvailable[] =[];
  bookID=0;

  booking:Bookings ={bookingId:0,flightFrom:"", flightTo:"", departureDate:new Date, arrivalDate:new Date,
    flightClass:"", customerName:"", price:0, createdAt:new Date
  }
  bookFlight : Bookings[] = [];
  constructor(private route:ActivatedRoute, private flightsNow: AvailableFlightsService, private confirm:BooikingServiceService ) {
    this.bookID = Number(this.route.snapshot.paramMap.get("bookingId"));
    
   }

  ngOnInit(): void {
    this.flightsNow.getCustomerById(this.bookID).subscribe(data =>{
    this.fa=data;
    })
  }  

  saveData(){
    this.booking.bookingId=this.fa.bookingId;
    this.booking.flightFrom=this.fa.flightFrom;
    this.booking.flightTo=this.fa.flightTo;
    this.booking.departureDate=this.fa.departureDate;
    this.booking.arrivalDate=this.fa.returnDate;
    this.booking.flightClass=this.fa.flightClass;
    this.booking.price=this.fa.price;
    this.confirm.AddBookings(this.booking).subscribe(data=>{
    console.log("added");
    alert('Flight booked successfully!');
    })
  }
  

}
