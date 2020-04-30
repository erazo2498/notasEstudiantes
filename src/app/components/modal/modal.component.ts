import { Estudiante } from './../../clases/estudiante';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Output() agregoEstudiante = new EventEmitter<Estudiante>();

  codigo: number;
  nombre: string;
  apellido: string;
  nota: number;

  constructor() { }

  ngOnInit(): void {
  }
  agregarEstudiante(){
    const infoEstudiante = new Estudiante(this.codigo, this.nombre, this.apellido, this.nota);
    this.agregoEstudiante.emit(infoEstudiante);
  }
}
