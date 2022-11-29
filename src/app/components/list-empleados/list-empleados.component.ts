import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css']
})
export class ListEmpleadosComponent implements OnInit {

  empleados: any[] = [];

  constructor(private empleadoService: EmpleadoService) { 
  }

  ngOnInit(): void {
    this.getEmpleados();
  }

  getEmpleados(){
    this.empleadoService.getEmpleados().subscribe(data => {
      this.empleados = [];
      data.forEach((element:any) => {
        this.empleados.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
      console.log(this.empleados);
    })
  }

  eliminarEmpleado(id: string){
    this.empleadoService.eliminarEmpleado(id).then(() => {
      console.log('Empleado eliminado con exito')
    }).catch(error => {
      console.log(error);
    })
  }
}
