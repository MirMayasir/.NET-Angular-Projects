import { Component, OnInit } from '@angular/core';
import { BookAppointment } from 'src/Models/bookappointment';
import { Profile } from 'src/Models/profile';
import { BookingsServicesService } from 'src/Services/bookings-services.service';
import { ProfileService } from 'src/Services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export default class ProfileComponent implements OnInit {

  user: Profile = {
    userName: '',
    fullName: '',
    email: '',
    phone: '',
    address: ''
  };

  name : string;

  constructor(private userService: ProfileService) { }

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    this.userService.getUserProfile().subscribe(
      data => {
        this.user = data;
      },
      error => {
        console.error('Error loading user profile', error);
      }
    );
  }

  updateProfile(): void {
    this.userService.updateUserProfile(this.user).subscribe(
      response => {
        console.log('Profile updated successfully', response);
      },
      error => {
        console.error('Error updating profile', error);
      }
    );
  }

  cancelChanges(): void {
    this.loadUserProfile(); // Reload user profile to revert changes
  }


}
