import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component {



  
  // Crear el Arra de datos -> Almacena informacion
tareas = new Array;
// Los datos para el array
nom = "";
des = "";

isDisabled = true;

updateBtn(){
  if(this.nom.trim()!=''){
    //String.trim() removes the whitespace characters from both ends of a string.
    // console.log('no esta vacio', this.nom,this.nom.length)
    this.isDisabled=false;
  } else{
    this.isDisabled=true;
  }

  return this.isDisabled;
}

// Metodo para Añadir valores al array
Agregar(){
  if(this.nom!=''){
    this.tareas.push({'Nombre': this.nom, 'Descripcion': this.des}); /* error si usas Descripción,por la ó */

    //csl [{}{}{}]
    console.log(this.tareas);

    //limpiamos inputs
    this.nom='';
    this.des='';

  } else{
    console.log('debe ingresar nombre de tarea')
  }

  this.isDisabled =true;

}


Eliminar(indice:number){
  // this.datos.splice(indice, 1);
  this.tareas.splice(indice, 1);
  }
}
