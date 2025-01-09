// poster.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit {
  isMobile: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  }

  checkScreenSize = () => {
    this.isMobile = window.innerWidth < 768; // Set the mobile screen width breakpoint
  }

  redirectToWhatsApp() {
    window.location.href = 'https://wa.me/+353894627216';
  }
  redirectToInstagram(){
    window.location.href = 'https://www.instagram.com/__.pranavv.___/';
  }
}
