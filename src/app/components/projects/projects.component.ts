import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { DataService } from '../../services/data.service';
import { ProjectsModel } from '../../interfaces/data.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  owlCarouselOptions: OwlOptions = {
    margin: 50,
    // nav: true,
    // navText: [ '<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>' ],
    navSpeed: 700,
    loop: false,
    pullDrag: false,
    dotsEach: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3
      }
    },
  };

  projectsList: ProjectsModel[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.initializeProjects();
  }

  private initializeProjects(): void {
    this.dataService.getAllProjects()
      .subscribe( data => this.projectsList = data);
  }
}
