import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// our components
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { SkillsComponent } from './skills/skills.component';
import { CareerComponent } from './career/career.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ProjectsComponent,
    FooterComponent,
    SliderComponent,
    SkillsComponent,
    CareerComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    ProjectsComponent,
    FooterComponent,
    SliderComponent,
    SkillsComponent,
    CareerComponent
  ]
})
export class ComponentsModule { }
