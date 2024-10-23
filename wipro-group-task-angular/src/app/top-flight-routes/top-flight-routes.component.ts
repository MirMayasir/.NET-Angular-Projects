import { Component } from '@angular/core';

@Component({
  selector: 'app-top-flight-routes',
  templateUrl: './top-flight-routes.component.html',
  styleUrls: ['./top-flight-routes.component.css']
})
export class TopFlightRoutesComponent {
  routes = [
    { from: 'Chennai', to: 'Mumbai', code: 'MAA-BOM', image: 'assets/images/chennai-mumbai.jpg' },
    { from: 'Delhi', to: 'Ahmedabad', code: 'DEL-AMD', image: 'assets/images/delhi-ahmedabad.jpg' },
    { from: 'Delhi', to: 'Lucknow', code: 'DEL-LKO', image: 'assets/images/delhi-lucknow.jpg' },
    { from: 'Mumbai', to: 'Dubai', code: 'BOM-DXB', image: 'assets/images/mumbai-dubai.jpg' },
    { from: 'Mumbai', to: 'Kolkata', code: 'BOM-CCU', image: 'assets/images/mumbai-kolkata.jpg' },
    { from: 'Kolkata', to: 'Chennai', code: 'CCU-MAA', image: 'assets/images/kolkata-chennai.jpg'},
    { from: 'Hyderabad', to: 'Goa', code: 'HYD-GOI', image: 'assets/images/hyderabad-goa.jpg'}
  ];
}
