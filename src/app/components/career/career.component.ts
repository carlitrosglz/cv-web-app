import { Component, OnInit } from '@angular/core';
import { CareerEntry } from '../../interfaces/career-data.interface';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})
export class CareerComponent implements OnInit {

  dataEducation: CareerEntry[] = [
    {
      initialDate: '2020',
      title: 'Autodidacta',
      company: 'Udemy'
    },
    {
      initialDate: '2017',
      endDate: '2019',
      title: 'CFGS Desarrollo de aplicaciones multiplataforma',
      company: 'IES Nicolau Copèrnic'
    },
    {
      initialDate: '2014',
      endDate: '2016',
      title: 'CFGS Producción de audiovisuales y espectáculos',
      company: 'IES Santa Eulalia'
    },
    {
      initialDate: '2012',
      endDate: '2014',
      title: 'Bachillerato tecnológico',
      company: 'IES Montserrat Roig'
    }
  ];

  dataWork: CareerEntry[] = [
    {
      initialDate: 'Febrero 2020',
      endDate: 'Agosto 2020',
      title: 'Junior Android Developer',
      company: 'Estel Grup, S.L',
      description: 'Mantenimiento de código y desarrollo de funcionalidades para dos aplicaciones Android nativas: SUIFF y SUIFF Professional. Diseño UI / UX.'
    },
    {
      initialDate: 'Diciembre 2019',
      endDate: 'Febrero 2020',
      title: 'Junior Software Developer',
      company: 'Indra Sistemas, S.A',
      description: 'Desarrollo de aplicaciones de escritorio con arquitectura ABSIS, para cliente bancario.'
    },
    {
      initialDate: 'Septiembre 2019',
      endDate: 'Diciembre 2019',
      title: 'Junior Android Developer',
      company: 'Happy Customer Box, S.L',
      description: 'Desarrollo desde cero de una aplicación Android nativa, para la digitalización de la experiencia gastrónomica ofrecida por el cliente.'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
