import { Component, OnInit } from '@angular/core';

import { CareerDataModel } from '../../interfaces/data.interface';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  dataEducation: CareerDataModel[] = [];
  dataWork     : CareerDataModel[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getCareerData('education').subscribe( data => this.dataEducation = data );
    this.dataService.getCareerData('experience').subscribe( data => this.dataWork = data );
  }

}
