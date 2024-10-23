import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent{
  content = "Wipro";
  cname = "mayasir";


  currentStyles: Record<string, string> = {};
  currentClasses: Record<string, boolean> = {};
  saveable = true;
  modified = false;
  special = true;
  canSave = true;
  isUnchanged = true;
  isSpecial = true;
  flag = false;


  setCurrentStyles() {
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px',
    };
  }


  setCurrentClasses() {
    // CSS classes: added/removed per current state of component properties
    this.currentClasses = {
      saveable: this.canSave,
      modified: !this.isUnchanged,
      special: this.isSpecial,
    };
  }

  ngonInit() {
    this.setCurrentStyles();
    this.setCurrentClasses();
  }
  

}
