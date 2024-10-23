import { Component, OnInit } from '@angular/core';
import { BookAppointment } from 'src/Models/bookappointment';
import { BookingsServicesService } from 'src/Services/bookings-services.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  book:any;
  constructor(private booking:BookingsServicesService) { }
  appointmentId:number;
  ngOnInit(): void {
    this.getall();
    
  }

  getall():void{
    this.booking.getAllBookings().subscribe(data=>{
    this.book=data;
    })
  }
  searchAppointment(){
    this.booking.getBookingById(this.appointmentId).subscribe(data=>{
      this.book=data;
    })
  }



}
