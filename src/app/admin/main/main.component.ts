import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { titleService } from 'src/app/title.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  constructor(private router: Router,private renderer: Renderer2, private http: HttpClient, private Title:titleService) { }

  trucks: any[] = [
    { id: 1, tipo: 'carga', modelo: '2020', placa: '20sn-mxn', max_carga: '17t', entry_year: '2021', iduser: 1 },
    { id: 2, tipo: 'guía', modelo: '2018', placa: '18ab-xyz', max_carga: '10t', entry_year: '2019', iduser: 2 },
    { id: 3, tipo: 'carga', modelo: '2015', placa: '15xy-abc', max_carga: '25t', entry_year: '2016', iduser: 1 },
    { id: 4, tipo: 'guía', modelo: '2019', placa: '19cd-wxy', max_carga: '12t', entry_year: '2020', iduser: 3 },
    { id: 5, tipo: 'carga', modelo: '2017', placa: '17ef-zab', max_carga: '8t', entry_year: '2018', iduser: 2 }  
  ];
  datos: any[] = [
    { id:1,salida: 'Ciudad A', destino: 'Ciudad B', diesel: 'Gasolina', fechas: '2023-12-01', fechal: '2023-12-03', carga: 'Electrodomésticos', total: '$500', acciones: 'Editar, Eliminar' },
    { id:2,salida: 'Ciudad C', destino: 'Ciudad D', diesel: 'Gasolina', fechas: '2023-12-02', fechal: '2023-12-04', carga: 'Muebles', total: '$700', acciones: 'Editar, Eliminar' },
    { id:3,salida: 'Ciudad E', destino: 'Ciudad F', diesel: 'Diesel', fechas: '2023-12-05', fechal: '2023-12-07', carga: 'Ropa', total: '$300', acciones: 'Editar, Eliminar' },
    { id:4,salida: 'Ciudad G', destino: 'Ciudad H', diesel: 'Gasolina', fechas: '2023-12-08', fechal: '2023-12-10', carga: 'Alimentos', total: '$900', acciones: 'Editar, Eliminar' },
    { id:5,salida: 'Ciudad I', destino: 'Ciudad J', diesel: 'Diesel', fechas: '2023-12-11', fechal: '2023-12-13', carga: 'Juguetes', total: '$400', acciones: 'Editar, Eliminar' }
  ];
  e = false;
  chofer='';
  camion='';
  option: boolean | null | undefined;
  contador=0;
  time=10000;
  alert=false;
  j = 0; 
  button = document.getElementById('error');

  editartruck(idtruck: number) {
    const guardar = document.querySelector(`.oculta[data-index="${idtruck}"]`) as HTMLImageElement;

    // Verifica si se encontró la imagen 'disk'
    if (guardar) {
      // Agrega la clase deseada
      this.renderer.addClass(guardar, 'Tipe');
    }
    const divs = document.querySelectorAll(`input[data-index="${idtruck}"]`);
    divs.forEach((div) => {
      this.renderer.addClass(div as HTMLElement, 'Tipe');
    });
  }
  aceptarBorrado() {
    this.option = true;
  }
  
  cancelarBorrado() {
    this.option = false;
  }
  async eleccion(){
    if (this.option != null && this.option === true) {
      this.contador = 0;
      this.option = null;
    } else if (this.option != null && this.option === false) {
      this.alert = false;
      this.contador = 0;
      this.option = null;
    }
  }
  verificarBorradoTruck(idRecomendacion: number) {
    this.alert = true;
    this.contador = 10;
    const intervalo = setInterval(() => {
      if(this.contador==0){
        this.borrarTruck(idRecomendacion);
        clearInterval(intervalo);
      }else{
        this.contador--;
        this.eleccion();
      }
    }, 1000);

  }
  borrarTruck(id:number){
    if(this.alert){
      const url = `https://apibkend.onrender.com/delete_car${id}`;

    this.http.delete(url)
      .subscribe(
        (response) => {
          console.log(`Vehículo ${id} eliminado`);
          // Manejar la respuesta si es necesario
        },
        (error) => {
          console.error(`Error al eliminar el vehículo ${id}:`, error);
          // Manejar errores si es necesario
        }
      );
    }
  }
  guardarCambiosTruck(truck:any){
    const url = 'https://apibkend.onrender.com/update_vehiculo';

    const data = {
      id: truck.id,
      tipo: truck.tipo,
      model: truck.modelo,
      placa: truck.placa,
      max_load: truck.max_carga,
      entry_year: truck.entry_year,
      user_iduser: truck.iduser
    };

    this.http.put(url, data)
      .subscribe(
        (response) => {
          console.log('Vehículo actualizado:', response);
          // Manejar la respuesta si es necesario
        },
        (error) => {
          console.error('Error al actualizar el vehículo:', error);
          // Manejar errores si es necesario
        }
      );
  }
  abrir(id : number){
    this.e=true;
    this.chofer=this.trucks[id].iduser;
    this.camion=this.trucks[id].placa;
  }
  agc(){
    this.router.navigate(['/admin/addcamion']);
  }
  agv(){
    this.router.navigate(['/admin/addviaje']);
  }
  agu(){
    this.router.navigate(['/admin/addusuario'])
  }
  /*getTrucs(){
    const url = `https://apibkend.onrender.com/get_all_cars`;
    this.http.get(url).subscribe(
      (response: any) => {
        // Manejar la respuesta aquí
        if (response && response.length > 0) {
          if (response[0].errno === undefined) {
            if (response[0].Status === "Succes") {
              this.trucks = response;
            } else {
              console.log('No se encontraron coincidencias');
            }
          } else {
            console.log('Error de sql');
          }
        } else {
          console.log('Error: No se recibieron datos válidos');
        }
      },
      (error) => {
        console.error('Error al obtener los datos:', error);
      }
    );
  }*/
  ngOnInit(): void {
    /*this.getTrucs();*/
    this.button = document.getElementById('error');
    const dato = 'viajes';
    this.Title.setDatoString(dato);
  }
}
