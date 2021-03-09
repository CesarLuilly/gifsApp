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

    query : String)
  {
    //              //Agregamos elemento al inicio de la lista.
    this._historial.unshift(query)
    console.log(this._historial)
    
  }


}
