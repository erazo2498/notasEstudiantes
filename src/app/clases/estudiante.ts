export class Estudiante {
    codigo: number;
    nombre: string;
    apellido: string;
    nota: number;
    constructor( codigo: number, nombre: string, apellido: string, nota: number) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.nota = nota;
    }

}
