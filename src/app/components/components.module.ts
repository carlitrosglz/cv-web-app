import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// our components
import { NavbarComponent } from './navbar/navbar.component';
import { SliderComponent } from './slider/slider.component';
import { ProjectsComponent } from './projects/projects.component';
import { CareerComponent } from './career/career.component';
import { CareerEntryComponent } from './career-entry/career-entry.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SliderComponent,
    ProjectsComponent,
    CareerComponent,
    CareerEntryComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    SliderComponent,
    ProjectsComponent,
    CareerComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
