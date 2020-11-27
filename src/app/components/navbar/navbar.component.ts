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
  }

  onNavbarClick(section: string): void {
    this.emitter.emit(section);
  }

  getCV(): string {
    return this.dataService.getCV();
  }
}
