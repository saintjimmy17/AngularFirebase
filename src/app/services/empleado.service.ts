import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private firestore: AngularFirestore) { }


  agregarEmpleado(empleado: any): Promise<any>{ //Agregar los empleados al bakcend
    return this.firestore.collection('empleados').add(empleado)
  }


  getEmpleados(): Observable<any>{ //Mostrar los empleados en la tabla
    return this.firestore.collection('empleados', ref => ref.orderBy('fechaCreacion', 'asc')).snapshotChanges();
  }

  eliminarEmpleado(id: string): Promise<any>{
    return this.firestore.collection('empleados').doc(id).delete();
  }

  getEmpleado(id: string): Observable<any> {
    return this.firestore.collection('empleados').doc(id).snapshotChanges();
  }

  actualizarEmpleado(id: string, data:any): Promise<any> {
    return this.firestore.collection('empleados').doc(id).update(data);
  }

}
