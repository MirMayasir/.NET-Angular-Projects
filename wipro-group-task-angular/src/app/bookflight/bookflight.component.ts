import { Component, OnInit } from '@angular/core';
import { AvailableFlightsService } from 'src/AvailableFlights/available-flights.service';
import { FlightsAvailable } from 'src/Models/availableFlights';
import { FlightDetails } from 'src/Models/flightdetails';
import { FlightService } from 'src/Services/flight.service';

@Component({
  selector: 'app-bookflight',
  templateUrl: './bookflight.component.html',
  styleUrls: ['./bookflight.component.css']
})
export class BookflightComponent implements OnInit {

  flightsAvail: FlightsAvailable[] = [];
  Cfrom = "";
  Cto = "";
  fd: FlightDetails = { 
    flightFrom: "", 
    flightTo: "", 
    departure: new Date(), 
    return: new Date(), 
    traveller: 0, 
    flightclass: "" 
  };

  // Variables to bind min attributes for dates
  minDepartureDate: string = '';
  minReturnDate: string = '';

  constructor(private flights: FlightService, private flightsNow: AvailableFlightsService) { }

  ngOnInit(): void {
    this.initializeDates();
    this.getAllFlights();
  }

  // Initialize departure and return dates
  initializeDates(): void {
    const today = new Date().toISOString().split('T')[0]; // Set current date in yyyy-MM-dd format
    this.fd.departure = new Date();
    this.fd.return = new Date();
    
    // Bind current date as minimum for departure and return dates
    this.minDepartureDate = today;
    this.minReturnDate = today;
  }

  // Ensure return date is not earlier than departure date
  onDepartureDateChange(): void {
    const departureDate = new Date(this.fd.departure);
    const returnDate = new Date(this.fd.return);

    // Update minimum return date based on the selected departure date
    this.minReturnDate = departureDate.toISOString().split('T')[0];

    if (returnDate < departureDate) {
      this.fd.return = departureDate;
    }
  }

  // Fetch available flights
  getAllFlights(): void {
    this.flightsNow.getAllAvailableFlights().subscribe(data => {
      this.flightsAvail = data;
      console.log(this.flightsAvail);
    });
  }

  // Book a flight
  book(): void {
    this.flights.AddFlight(this.fd);
    console.log("Flight added", this.fd);
  }
}
