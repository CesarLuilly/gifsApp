import { HttpClient } from '@angular/common/http';
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

  private _historial  : string [] = [];
  private _apiKey     : string  = 'AKFARc5sdlat3uAh5aJoQjNsTiIX772f';

  //------------------------------------------------------------------------------------------
  public get historial(
    //              //Obtiene el historial.

    )
  {
    return [...this._historial];
  }

  public constructor(

    //              //Con esta proopiedad ya podemos hacer peticiones http.
    //              //Nota. har que asegurarnos que importemos de @angular.
    private http: HttpClient
    )
  {

  }

  // //------------------------------------------------------------------------------------------
  // public buscarGifs( 
  //   //              //Busca gifs. 1 .. PRIMERA FORMA  DE CONSUMIR UN SERVICIO HTTP.

  //   //              //Con esa asignacion nos aseguramos que 
  //   //              //  siempre va a tener algun valor y es para
  //   //              //  no llegue ningun valor.
  //   query : string = '')
  // {
  //   query = query.trim().toLocaleLowerCase();
  //   if (
  //     //            //El query no existe en el historial. 
  //     !this._historial.includes( query )
  //     )
  //   {
  //     //          //Agregamos elemento al inicio de la lista.
  //     this._historial.unshift(query);

  //     //          //corto el numero de item del historial, para 
  //     //          //  que sea fijo.
  //     this._historial = this._historial.splice(0, 10);
  //   }

  //   //              //Esto va a devolver una promesa.
  //   fetch('https://api.giphy.com/v1/gifs/search?api_key=AKFARc5sdlat3uAh5aJoQjNsTiIX772f&q=naruto&limit=10')
  //   .then(
  //     //            //Promesa de respuesta.
  //     resp => {
  //     resp.json().then(
  //       //          //Promesa de la data.
  //       data => {
  //       console.log(data);
  //     })
  //   })
  // }

  // //------------------------------------------------------------------------------------------
  // public async buscarGifs( 
  //   //              //Busca gifs. 2 .. SEGUNDA FORMA  DE CONSUMIR UN SERVICIO HTTP.

  //   query : string = '')
  // {
  //   query = query.trim().toLocaleLowerCase();

  //   if (
  //     //            //El query no existe en el historial. 
  //     !this._historial.includes( query )
  //     )
  //   {
  //     //          //Agregamos elemento al inicio de la lista.
  //     this._historial.unshift(query);

  //     //          //corto el numero de item del historial, para 
  //     //          //  que sea fijo.
  //     this._historial = this._historial.splice(0, 10);
  //   }

  //   //              //Esto va a devolver una promesa.
  //   const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=AKFARc5sdlat3uAh5aJoQjNsTiIX772f&q=naruto&limit=10');    
  //   const data = await resp.json();
  
  //   console.log(data);
  
  // }

  //------------------------------------------------------------------------------------------
  public buscarGifs( 
    //              //Busca gifs. 3 .. TERCERA FORMA DE CONSUMIR UN SERVICIO HTTP
    //              //                  Y ADEMAS ES A TRAVES DE UN MODULO DE ANGULAR.

    query : string = '')
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

    //              //Realizar peticiones HTTP.
    //              //Este nos ofrece muchas mas funcionalidades.
    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=AKFARc5sdlat3uAh5aJoQjNsTiIX772f&q=naruto&limit=10')
      .subscribe( (resp : any) => {
        console.log(resp.data);
      });
  }
}
