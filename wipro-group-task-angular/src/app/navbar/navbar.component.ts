import { Component, OnInit } from '@angular/core';
declare function toggleNavbar() : any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }
  

  ngOnInit(): void {
    
  }
  toggleNavbar() {
    toggleNavbar();
  }
  

}
