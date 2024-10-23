import { Component, OnInit } from '@angular/core';
import { BookAppointment } from 'src/Models/bookappointment';
import { BookingsServicesService } from 'src/Services/bookings-services.service';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent implements OnInit {

  
  constructor(private booking:BookingsServicesService) { }
  book: BookAppointment = {appointmentId:0, appointmentDate: new Date(), appointmentTime: "", patientName:"", resaon:""}
  ngOnInit(): void {

  }

  register(){
    console.log("start");
    this.booking.AddBookings(this.book).subscribe(data=>{
      alert("added");
      console.log(this.book);
    })
    
  }

}
