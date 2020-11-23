import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myApp';

  scrollToSection(event): void {
    if (event === 'homeSection') {
      window.scroll(0, 0);
      return;
    }

    const navbarHeight = document.getElementById('stickyNavbar').offsetHeight;

    document.getElementById(event).scrollIntoView(true);
    window.scroll(0, document.getElementById(event).offsetTop - navbarHeight);
  }
}
