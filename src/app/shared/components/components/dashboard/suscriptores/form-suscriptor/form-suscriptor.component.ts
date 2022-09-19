import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ISuscriptor, ModelSuscriptor } from 'src/app/models/ISuscriptor';
import { SuscriptorService } from 'src/app/services/suscriptor.service';
@Component({
  selector: 'app-form-suscriptor',
  templateUrl: './form-suscriptor.component.html',
  styleUrls: ['./form-suscriptor.component.css']
})
export class FormSuscriptorComponent implements OnInit {
 // JsonServer
  jsonServer: any[] = []; 
  form: FormGroup

  constructor(
    private fb: FormBuilder,
    private _suscriptorService: SuscriptorService
  )
  {
    this.form = this.fb.group({
      nombre: [``, Validators.required],
      apellido: [``, Validators.required],
      domicilio: [``, Validators.required],
      email: [``, Validators.required],
      celular: [``, Validators.required],
      genero: [``, Validators.required],
      fechaNacimiento: [``, Validators.required],
      notas: [``, Validators.required],
      dni: [``, Validators.required],
    })
  }

  ngOnInit(): void {
  }

  crearSuscriptor() {
    const suscriptor: ISuscriptor = {
      id: 1,
      creador: 222,
      nombre: this.form.value.nombre,
      apellido: this.form.value.apellido,
      // domicilio: this.form.value.domicilio,
      // celular: this.form.value.celular,
      // email: this.form.value.email,
      // genero: this.form.value.genero,
      // notas: this.form.value.notas,
      // dni: this.form.value.notas,
      // fechaNacimiento: this.form.value.fechaNacimiento,
      // informacionPersonal: [],
      // estado: "Deudor",
      // socio: 222
    }
    console.log(suscriptor)
    this._suscriptorService
    .agregarSuscriptor(suscriptor).subscribe((suscriptor => this.jsonServer.push(suscriptor))) 
  }
  
   random(min: number, max: number) {
  return Math.floor((Math.random() * (max - min + 1)) + min);
   }
  
   startDate = new Date(1990, 0, 1);

}
