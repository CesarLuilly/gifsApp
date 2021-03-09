import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  //------------------------------------------------------------------------------------------
  constructor(
    //              //Para poder utilizar el servicio necesitamos inyectarlo
    //              //  en el construtor.

    private gifsService : GifsService ) 
  { 

  }

  //------------------------------------------------------------------------------------------
  public get historial( 
    //              //Obtiene el historial a partir del servicio.
    
    )
  {
    return [...this.gifsService.historial];
  }
}
