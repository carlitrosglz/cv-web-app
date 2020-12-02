import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService } from '../../services/data.service';
import { PersonalInfoModel } from '../../interfaces/data.interface';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  personalInfo: PersonalInfoModel;
  form: FormGroup;

  constructor(private dataService: DataService,
              private formBuilder: FormBuilder) {

    this.createForm();
  }

  ngOnInit(): void {
    this.dataService.getPersonalInfo()
    .subscribe( data => this.personalInfo = data[0]);
  }

  validateField(field: string): boolean {
    return this.form.get(field).invalid && this.form.get(field).touched;
  }

  sendMessage(): void {
    this.dataService.sendMessage(
      this.form.get('name').value,
      this.form.get('email').value,
      this.form.get('message').value)
        .then( () => {
          this.form.reset();

          // sweetalert2
          Swal.fire({
            icon: 'success',
            title: '¡Genial!',
            text: '¡El mensaje ha sido enviado correctamente!\nEn breves me pondré en contacto contigo :)'
          });
        })
        .catch( error => {
          // sweetalert2
          Swal.fire({
            icon: 'error',
            title: 'Ups...',
            text: 'Ha ocurrido un error y no se ha podido enviar el mensaje. Inténtalo de nuevo más tarde.'
          });
        });
  }

  private createForm(): void{
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.email, Validators.minLength(1)]],
      message: ['', [Validators.required]]
    });
  }

}
