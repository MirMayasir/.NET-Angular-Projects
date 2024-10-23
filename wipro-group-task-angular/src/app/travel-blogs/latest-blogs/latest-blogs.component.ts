import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-blogs',
  templateUrl: './latest-blogs.component.html',
  styleUrls: ['./latest-blogs.component.css']
})
export class LatestBlogsComponent implements OnInit {
  latestBlogs = [
    {
      title: '7 Exciting Things to Do on Your Singapore Trip',
      description: 'Discover the top 7 must-do activities in Singapore.',
      author: 'Priyotosh',
      date: 'September 3, 2024',
      imageUrl: 'assets/latest-blogs/singapore-trip.png'
    },
    {
      title: 'Top Cities to Experience the Grandeur of Ganesh Chaturthi',
      description: 'Discover the top 5 cities in India to experience Ganesh Chaturthi.',
      author: 'Priyotosh',
      date: 'September 2, 2024',
      imageUrl: 'assets/latest-blogs/ganesh-chaturthi.jpg'
    },
    {
      title: 'Dealing with Flight Delays and Cancellations',
      description: 'Learn your rights and options when facing flight delays.',
      author: 'Anjali',
      date: 'September 2, 2024',
      imageUrl: 'assets/latest-blogs/flight-delay.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
