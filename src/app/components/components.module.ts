import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CarouselModule } from 'ngx-owl-carousel-o';

// our components
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectsComponent } from './projects/projects.component';
import { CareerComponent } from './career/career.component';
import { CareerEntryComponent } from './career-entry/career-entry.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ProjectsComponent,
    CareerComponent,
    CareerEntryComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    CarouselModule
  ],
  exports: [
    NavbarComponent,
    ProjectsComponent,
    CareerComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
