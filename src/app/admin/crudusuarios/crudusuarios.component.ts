import {Component, ElementRef, Renderer2, OnInit} from '@angular/core';

@Component({
  selector: 'app-crudusuarios',
  templateUrl: './crudusuarios.component.html',
  styleUrls: ['./crudusuarios.component.css']
})
export class CrudusuariosComponent implements OnInit {

  constructor(private renderer: Renderer2, private elRef: ElementRef) {}
  usuarios = [
    { usuario: 'usuario1', contrasena: 'contraseña1' },
    { usuario: 'usuario2', contrasena: 'contraseña2' },
    { usuario: 'usuario3', contrasena: 'contraseña3' },
    { usuario: 'usuario4', contrasena: 'contraseña4' },
    { usuario: 'usuario5', contrasena: 'contraseña5' }
  ];
  choferes = [
    { usuario: 'usuario1', contrasena: 'contraseña1', apellido: 'Apellido1', licencia: 'Licencia1' },
    { usuario: 'usuario2', contrasena: 'contraseña2', apellido: 'Apellido2', licencia: 'Licencia2' },
    { usuario: 'usuario3', contrasena: 'contraseña3', apellido: 'Apellido3', licencia: 'Licencia3' },
    { usuario: 'usuario4', contrasena: 'contraseña4', apellido: 'Apellido4', licencia: 'Licencia4' },
    { usuario: 'usuario5', contrasena: 'contraseña5', apellido: 'Apellido5', licencia: 'Licencia5' }
  ];
  

  usuario='';
  contrasena='';
  tipo='';
  apellido='';
  licencia='';
  chofer?:boolean;
  agregar(){
    
  }
  ngOnInit(): void {
    this.chofer=false;

  }
}
