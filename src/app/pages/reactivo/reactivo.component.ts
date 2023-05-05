import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.scss']
})
export class ReactivoComponent implements OnInit {

  form: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.createForm();
    this.form.controls['nombre'].disable();
  }

  save() {
    console.log(this.form);
    console.log(this.form.value.nombre);
    console.table(this.form.value)
  }

  createForm() {
    this.form = new FormGroup({
      nombre: new FormControl<string>('', [Validators.minLength(2), Validators.required]),
      apellido: new FormControl('', [Validators.minLength(3), Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      edad: new FormControl<number>(null, [Validators.min(0), Validators.max(125), Validators.required])
    })
  }
}
