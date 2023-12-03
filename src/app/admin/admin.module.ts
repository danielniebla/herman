import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CrudviajeComponent } from './crudviaje/crudviaje.component';
import { CrudcamionComponent } from './crudcamion/crudcamion.component';
import { MainComponent } from './main/main.component';
import { ClarityModule } from "@clr/angular";
import { DirectivasModule } from '../directivas/directivas.module';
import { CrudusuariosComponent } from './crudusuarios/crudusuarios.component';


@NgModule({
  declarations: [
    CrudviajeComponent,
    CrudcamionComponent,
    MainComponent,
    CrudusuariosComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ClarityModule,
    DirectivasModule,

  ],
  exports: [
  ],
})
export class AdminModule { }

