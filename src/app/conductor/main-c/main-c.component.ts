import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { titleService } from 'src/app/title.service';

@Component({
  selector: 'app-main-c',
  templateUrl: './main-c.component.html',
  styleUrls: ['./main-c.component.css']
})
export class MainCComponent implements OnInit {
  constructor(private router: Router, private Title :titleService) { }
  insumos(){
    this.router.navigate(['/conductor/insumos']);
  }
  estado(){
    this.router.navigate(['/conductor/estado']);
  }
  ngOnInit(): void {
    const dato = 'Ruta de viaje';
    this.Title.setDatoString(dato);
  }
  
}
