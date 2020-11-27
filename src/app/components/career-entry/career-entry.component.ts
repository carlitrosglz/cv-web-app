import { Component, OnInit, Input } from '@angular/core';

import { CareerDataModel } from '../../interfaces/data.interface';

@Component({
  selector: 'app-career-entry',
  templateUrl: './career-entry.component.html',
  styleUrls: ['./career-entry.component.css']
})
export class CareerEntryComponent implements OnInit {

  @Input() entry: CareerDataModel;

  constructor() { }

  ngOnInit(): void {
  }
}
