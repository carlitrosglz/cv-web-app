import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { PersonalInfoModel } from '../../interfaces/data.interface';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  personalInfo: PersonalInfoModel;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPersonalInfo()
    .subscribe( data => this.personalInfo = data[0]);
  }
}
