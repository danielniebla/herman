import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  title='gmaps'
  position={
    lat:24.770011553834394,
    lng:-107.453133892185
    
  };
  label = {
    text: 'Mi Etiqueta', // Texto de la etiqueta
    color: 'blue',     // Color del texto
    fontSize: '14px',   // Tamaño de fuente del texto
    fontWeight: 'bold'  // Peso de fuente del texto
  };
}
