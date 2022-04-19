import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    { usuario: "jPerez", nombre: 'Julian', apellido: "Perez", genero: 'Masculino' },
    { usuario: "Akari", nombre: 'Karina', apellido: "Alaniz", genero: 'Femenino' },
    { usuario: "Fruben", nombre: 'Ruben', apellido: "Fanego", genero: 'Masculino' },
    { usuario: "Bmica", nombre: 'Micaela', apellido: "Balestieri", genero: 'Femenino' },
    { usuario: "Adaf", nombre: 'Dafne', apellido: "Alul", genero: 'Femenino' },
    { usuario: "Oara", nombre: 'Araxi', apellido: "Osikovsky", genero: 'Femenino' },
  
  ];

  constructor() { }
//Metodo salice para obtener una copia del array. para obtener la lista de usuarios
getUsuarios(){
  return this.listUsuarios.slice();
}

//Metodo para eliminar un registro
//en los parametros le ponemos el index para decir que queremos eliminar donde este parado
// y que queremos eliminar un solo elemento
eliminarUsuario(index:number){
 this.listUsuarios.splice(index,1);
}

agregarUsuario(usuario: Usuario){
  //unshift --> agrega un nuevo elemento alcomienzo del array 
  this.listUsuarios.unshift(usuario);
}

}
