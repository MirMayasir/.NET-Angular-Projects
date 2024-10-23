import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-destination-cards',
  templateUrl: './destination-cards.component.html',
  styleUrls: ['./destination-cards.component.css']
})
export class DestinationCardsComponent implements OnInit {
  indiaDestinations = [
    { title: 'Holiday Destination (Taj Mahal)', imageUrl: 'assets/india-destinations/Taj_Mahal.jpeg' },
    { title: 'Offbeat Places (Meghalaya)', imageUrl: 'assets/india-destinations/offbeat-place.jpg' },
    { title: 'Pilgrimage( Golden Temple)', imageUrl: 'assets/india-destinations/pilgrimage.jpg' },
    { title: 'Things to Do', imageUrl: 'assets/india-destinations/things-to-do.jpg' },
    { title: 'Travel Tips/Others', imageUrl: 'assets/india-destinations/guide.jpg' }
  ];

  internationalDestinations = [
    { title: 'Holiday Destinations (Bangkok)', imageUrl: 'assets/international-destinations/Holiday.jpg' },
    { title: 'Offbeat Places (Fiji)', imageUrl: 'assets/international-destinations/offbeat.jpg' },
    { title: 'Pilgrimage (Western Wall)', imageUrl: 'assets/international-destinations/Western-Wall.jpg' },
    { title: 'Things to Do', imageUrl: 'assets/international-destinations/things.jpg' },
    { title: 'Travel Tips/Others', imageUrl: 'assets/international-destinations/guide1.jpg' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
