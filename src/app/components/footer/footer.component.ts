import { Component, OnInit } from '@angular/core';
import { DEPLOYMENT_VERSION } from '../../../environments/environment';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public version = DEPLOYMENT_VERSION;

  constructor() { }

  ngOnInit(): void {
  }

}
