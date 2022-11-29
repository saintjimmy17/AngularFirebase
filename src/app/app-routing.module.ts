import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';
import { CreateEmpleadoComponent } from './components/create-empleado/create-empleado.component';

const routes: Routes = [
  { path: '', redirectTo: 'list-empleados', pathMatch: 'full' }, //Redirecciona a la pagina que pongas en caso de estar vacia
  { path: 'list-empleados', component: ListEmpleadosComponent }, //Para que funcionen las rutas
  { path: 'create-empleado', component: CreateEmpleadoComponent },
  { path: 'editEmpleado/:id', component: CreateEmpleadoComponent},
  { path: '**', redirectTo: 'list-empleados', pathMatch: 'full' } //Los astericos redireccionan a la pagina en caso de que no coincida
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
