import { Component, OnInit } from '@angular/core';
import { BooikingServiceService } from 'src/BookingService/booiking-service.service';
import { Bookings } from 'src/Models/bookings';
import { FlightDetails } from 'src/Models/flightdetails';
import { FlightService } from 'src/Services/flight.service';

@Component({
  selector: 'app-displayflight',
  templateUrl: './displayflight.component.html',
  styleUrls: ['./displayflight.component.css']
})
export class DisplayflightComponent implements OnInit {

  constructor(private book:BooikingServiceService) { }
  bookings:Bookings;
  bookId:number;
  ngOnInit(): void {
    
    
  }

  getDetails():any{
    console.log("search starts");
    this.book.getFlightById(this.bookId).subscribe(data=>{
      this.bookings=data;
      console.log("search ends");
    })
  }

}
