import { Component } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {


  // Crear el Arra de datos -> Almacena informacion
datos = new Array;
// Los datos para el array
nom = "";
ape = "";

// Metodo para Añadir valores al array
Agregar(){
  if(this.nom!=''){
    this.datos.push({'Nombre': this.nom, 'Apellido': this.ape});

    //csl [{}{}{}]
    console.log(this.datos);

    //limpiamos inputs
    this.nom='';
    this.ape='';

  } else{
    console.log('debe ingresar nombre')
  }
}


Eliminar(indice:number){
  // this.datos.splice(indice, 1);
  this.datos.splice(indice, 1);

  }



}
