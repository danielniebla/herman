import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainCComponent } from './conductor/main-c/main-c.component';
import { InsumosComponent } from './conductor/insumos/insumos.component';
import { EstadoComponent } from './conductor/estado/estado.component';
import { MainComponent } from './admin/main/main.component';
import { CrudcamionComponent } from './admin/crudcamion/crudcamion.component';
import { CrudviajeComponent } from './admin/crudviaje/crudviaje.component';
import { CrudusuariosComponent } from './admin/crudusuarios/crudusuarios.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'login', component:LoginComponent},
  {path:'conductor',component:MainCComponent},
  {path:'conductor/insumos',component:InsumosComponent},
  {path:'conductor/estado',component:EstadoComponent},
  {path:'admin', component:MainComponent},
  {path:'admin/addcamion', component:CrudcamionComponent},
  {path:'admin/addviaje', component:CrudviajeComponent},
  {path:'admin/addusuario', component:CrudusuariosComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
