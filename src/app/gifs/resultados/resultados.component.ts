import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent {

  //------------------------------------------------------------------------------------------
  public get resultados (
    //              //Devuelve los resultados.

    )
  {
    return this.gifsService.resultados;
  }

  //------------------------------------------------------------------------------------------
  constructor(
    //              //Init.

    private gifsService : GifsService
    ) 
  {   }

}
