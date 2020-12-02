import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() emitter: EventEmitter<string> = new EventEmitter();

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.navbarOnScroll();
  }

  onNavbarClick(section: string): void {
    this.emitter.emit(section);
  }

  getCV(): string {
    return this.dataService.getCV();
  }

  private navbarOnScroll(): void {
    window.addEventListener('scroll', () => {

      const navbarElement = document.getElementById('stickyNavbar');
      const backgroundElement = document.getElementById('navigation-image');
      const limitScroll = backgroundElement.offsetHeight - navbarElement.offsetHeight;
      const opacity = window.scrollY / limitScroll;

      navbarElement.style.backgroundColor = `rgba(255,255,255,${opacity})`;
    });
  }
}
