import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { SkillsModel } from '../../interfaces/data.interface';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  frameworks: SkillsModel[] = [];
  ide:        SkillsModel[] = [];
  languages:  SkillsModel[] = [];
  tools:      SkillsModel[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.getSkillsData()
      .subscribe( data => data.forEach(
        skill => {
          switch (skill.type){
            case 'framework': this.frameworks.push(skill); break;
            case 'tools'    : this.tools.push(skill); break;
            case 'language' : this.languages.push(skill); break;
            case 'ide'      : this.ide.push(skill); break;
          }
        }
      ));
  }

}
