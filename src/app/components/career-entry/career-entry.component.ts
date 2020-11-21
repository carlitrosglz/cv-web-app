import { Component, OnInit, Input } from '@angular/core';
import { CareerEntry } from '../../interfaces/career-data.interface';

@Component({
  selector: 'app-career-entry',
  templateUrl: './career-entry.component.html',
  styleUrls: ['./career-entry.component.css']
})
export class CareerEntryComponent implements OnInit {

  @Input() entry: CareerEntry;

  constructor() { }

  ngOnInit(): void {
  }
}
