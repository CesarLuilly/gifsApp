import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  //                //En donde nosotros podemos buscar por
  //                //  elementos HTML, directivas, clases, IDs
  //                //  y lo va a asignar al elemento txtBuscar de 
  //                //  de la clase.
  //                //Operador !: le estamos diciendo a TypeScript
  //                //  qye el valor de ElementRef nunca va a ser nulo.
  //                //Nota. Siempre que veamos que una clase es de tipo 
  //                //  generico, es importante especificar el Tipo,
  //                //  que en este caso el tipo HTMLInputElement.
  @ViewChild('txtBuscar') txtBuscar !: ElementRef<HTMLInputElement>;

  //------------------------------------------------------------------------------------------   
  constructor( 

  //                //Para poder utilizar el servicio necesitamos inyectarlo
  //                //  en el construtor.
    private gifsService : GifsService )
  {

  }

  //------------------------------------------------------------------------------------------   
  public buscar (
  //                //Busqueda.

  ) : void{
    console.log(this.txtBuscar);
    const valor = this.txtBuscar.nativeElement.value;

    if(
      //            //Validacion para que no deje ingresar cadenas vacias.
      valor.trim().length === 0
      )
    {
      return;
    }

    console.log(valor);

    this.gifsService.buscarGifs(valor);
    this.txtBuscar.nativeElement.value = "";
  }
}
