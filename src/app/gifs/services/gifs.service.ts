import { Injectable } from '@angular/core';

//                  //NOTA.NOTA.
//                  //providedIn: 'root' esta linea es agregado cuando generamos
//                  //  cuando generamos el servicio de ng, y aqui es algo nuevo 
//                  //  que incluyo Angular desde la version 4.0, y con esto permite
//                  //  que los servicio puedan estar definidos cuando se construye
//                  //  el BUNDLE de la aplicacion, y con esto decimos que no importa
//                  //  en que lugar este este decorador del servicio, ya que este
//                  //  ya que este servicio va a ser unico y de manera global en el root,
//                  //  y esto es genial ya que no necesito especificar este servicio en
//                  //  los provider de cada uno de los modulos donde se quiera utiliza,
//                  //  pero con esto ya no necesitamos especificarlos..
@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial : String [] = [];

  //------------------------------------------------------------------------------------------
  public get historial(
    //              //Obtiene el historial.

    )
  {
    return [...this._historial];
  }

  //------------------------------------------------------------------------------------------
  public buscarGifs( 
    //              //Busca gifs.

    //              //Con esa asignacion nos aseguramos que 
    //              //  siempre va a tener algun valor y es para
    //              //  no llegue ningun valor.
    query : String = '')
  {
    query = query.trim().toLocaleLowerCase();

    if (
      //            //El query no existe en el historial. 
      !this._historial.includes( query )
      )
      {
        //          //Agregamos elemento al inicio de la lista.
        this._historial.unshift(query);

        //          //corto el numero de item del historial, para 
        //          //  que sea fijo.
        this._historial = this._historial.splice(0, 10);
      }
      
    console.log(this._historial);
  }
}
