import { Estudiante } from './../../clases/estudiante';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  listaEstudiantes: Estudiante [] = [
    { codigo: 1, nombre: 'Bra', apellido: 'Er', nota: 4.5}, { codigo: 2, nombre: 'Sti', apellido: 'Er', nota: 4.5},
    { codigo: 3, nombre: 'Brayan', apellido: 'Erazo', nota: 2.9} , { codigo: 4, nombre: 'Stiven', apellido: 'Erazo', nota: 4.5},
    { codigo: 5, nombre: 'Brayan', apellido: 'Serna', nota: 5} , { codigo: 6, nombre: 'Brayan Stiven', apellido: 'Erazo', nota: 3},
    { codigo: 7, nombre: 'Camilo', apellido: 'Erazo', nota: 4.5} , { codigo: 8, nombre: 'Andres', apellido: 'Erazo', nota: 4.5},
    { codigo: 9, nombre: 'Yeiner', apellido: 'Erazo', nota: 2.5} , { codigo: 10, nombre: 'Stiwer', apellido: 'Serna', nota: 4.5},
  ];
  constructor() { }

 ngOnInit(): void {
  }

}
