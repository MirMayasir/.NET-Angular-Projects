import { Component, OnInit } from '@angular/core';
import { BooikingServiceService } from 'src/BookingService/booiking-service.service';
import { ContactusService } from 'src/contactusService/contactus.service';
import { Bookings } from 'src/Models/bookings';
import { Contactus } from 'src/Models/contactus';

@Component({
  selector: 'app-admin-message',
  templateUrl: './admin-message.component.html',
  styleUrls: ['./admin-message.component.css']
})
export class AdminMessageComponent implements OnInit {

  constructor(private contactservices:ContactusService, private book:BooikingServiceService) { }

  contact : Contactus [] = [];
  bookings : Bookings[] = [];

  ngOnInit(): void {
    this.getMessages();
    this.getallBookings();
  }
  getMessages():void{
    this.contactservices.getAllMessages().subscribe(data =>{
      this.contact=data;
      console.log("fetched data form db");
    })
  }

  getallBookings():void{
    this.book.getAllBookings().subscribe(data=>{
      this.bookings=data;
    })

  }

}
