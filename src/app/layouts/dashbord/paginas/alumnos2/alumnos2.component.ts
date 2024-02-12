import { Component, OnInit } from '@angular/core';
import { NotificacionService } from '../../../../core/notificacion/notificacion.service';
import { ListaService } from '../../../../core/listaAlumnos/lista.service';
import { UsuarioModelo } from './model';
import { SpinnerService } from '../../../../core/spinner/spinner.service';
import { MatDialog } from '@angular/material/dialog';
import { FormularioComponent } from './formulario/formulario.component';
import Swal from 'sweetalert2';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-alumnos2',
  templateUrl: './alumnos2.component.html',
  styleUrl: './alumnos2.component.scss'
})
export class Alumnos2Component{

  displayedColumns: string[] = ['id','Nombre Completo','Email','Provincia','Ciudad','Nota','Rol','Accion'];
  criterio:string="";
  dataSource:UsuarioModelo[] = [];
  totalItem = 0;
  pageSize = 5;
  currentPage = 1;

  constructor(
    private listaAlumno:ListaService,
    private alert:NotificacionService,
    private cargando:SpinnerService,
    public dialogo:MatDialog
    ){
      // this.listaAlumno.datos$().subscribe({
      //   next:(val)=>this.dataSource = val
      // })
      this.listaAlumno.paginador(this.currentPage).subscribe(
        {next:(val)=>{
          this.totalItem = val.items;
          this.dataSource = val.data;
        }}
      )
      
    }
 
 


  crear(){
    this.dialogo.open(FormularioComponent).afterClosed().subscribe({
      next:(res)=>{
        if(res){
          this.listaAlumno.cargarAlumno(res).subscribe({
        next:(val)=>this.dataSource = [...val]
      })
        }
      }
    })
  }


  editar(alumno:UsuarioModelo){
    this.dialogo.open(FormularioComponent,
      {
        data:alumno
      }).afterClosed().subscribe(
        {next:(res)=>{
          if(res){
            this.listaAlumno.editarAlumno(alumno.id,res).subscribe({
              next:(val)=>{this.dataSource = val
              this.alert.actualizadoExito()}
            })
          }
        }}
      )
  }



  borrar(id:number){
    Swal.fire({
      title: "Atención!",
      text: "Desea eliminar este usuario?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Eliminado!",
          text: "Usuario eliminado",
          icon: "success"
        });
  
        this.listaAlumno.borrar(id).subscribe(
      { next:(val) => this.dataSource = val})
      }
  
    });
    }



onPage(ev:PageEvent){
  this.currentPage = ev.pageIndex + 1

  this.listaAlumno.paginador(this.currentPage, ev.pageSize).subscribe({
    next:(res)=>{
      this.totalItem = res.items;
      this.dataSource = res.data;
      this.pageSize = ev.pageSize;
    }
  })
}

}
