import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-blogs',
  templateUrl: './travel-blogs.component.html',
  styleUrls: ['./travel-blogs.component.css']
})
export class TravelBlogsComponent implements OnInit {
  blogs = [
    {
      category: 'Holiday Destinations',
      title: 'What to Do If You Miss Your Connecting Flight'
      
    },
    {
      category: 'Holiday Destinations',
      title: 'Hidden Gems of Rishikesh: Off-the-Beaten-Path Attractions You Can\'t Miss'
    },
    {
      category: 'Holiday Destinations',
      title: 'Exploring the World: Best Destinations for Solo Travelers'
    },
    {
      category: 'Holiday Destinations',
      title: 'Discover why booking your flights well in advance can save you both time and money.'
    }
  ];

  reasons = [
    {
      title: 'Easy Booking',
      description: 'We offer easy and convenient flight bookings with attractive offers.',
      icon: 'assets/travel-blogs/easy-booking.png'
    },
    {
      title: 'Lowest Price',
      description: 'We ensure low rates on holiday packages, and flight tickets.',
      icon: 'assets/travel-blogs/lowest-booking.png'
    },
    {
      title: 'Exciting Deals',
      description: 'Enjoy exciting deals on flights and tour packages.',
      icon: 'assets/travel-blogs/exc-deal.png'
    },
    {
      title: '24/7 Support',
      description: 'Get assistance 24/7 on any kind of travel-related query. We are happy to assist you.',
      icon: 'assets/travel-blogs/support-icon.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
