import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCComponent } from './main-c/main-c.component';
import { MapComponent } from './map/map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { InsumosComponent } from './insumos/insumos.component';
import { EstadoComponent } from './estado/estado.component';
import { ClarityModule } from "@clr/angular";
import { FormsModule } from '@angular/forms';
import { DirectivasModule } from '../directivas/directivas.module';


@NgModule({
  declarations: [
    MainCComponent,
    MapComponent,
    InsumosComponent,
    EstadoComponent,
    
  ],
  imports: [
    CommonModule,
    GoogleMapsModule,
    ClarityModule,
    FormsModule,
    DirectivasModule,
  ],
  exports: [
  ]
})
export class ConductorModule { }
