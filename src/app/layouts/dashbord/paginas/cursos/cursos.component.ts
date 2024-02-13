import { Component } from '@angular/core';
import { CursoModel } from './model';
import { ListacursoService } from '../../../../core/services/cursos/listacurso.service';
import { MatDialog } from '@angular/material/dialog';
import { CrearCursoComponent } from './crear-curso/crear-curso.component';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {
displayedColumns: string[] = ['id', 'nombreCurso', 'Fecha', 'Acciones'];
Cursos:CursoModel[]=[]



  constructor(
    private cursosService:ListacursoService,
    public dialogo:MatDialog){
    this.cursosService.getCursos().subscribe(
      {
        next:(cursos)=>this.Cursos = cursos
      })}


crear(){
  this.dialogo.open(CrearCursoComponent).afterClosed().subscribe(
    {
      next:(curso)=>{
        if(curso){
          this.cursosService.crearCurso(curso).subscribe({
            next:(actualizado)=>{this.Cursos = actualizado}
          })}}})}



borrarCurso(id:number){
  Swal.fire({
    title: "Atención!",
    text: "Desea eliminar este curso?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Si, eliminar"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Eliminado!",
        text: "El curso fue eliminado",
        icon: "success"
      });

      this.cursosService.borrarCurso(id).subscribe(
    { next:(val) => this.Cursos = val})
    }

  });
  }

 


editarCurso(curso:CursoModel){
  this.dialogo.open(CrearCursoComponent,
    {
      data: curso
    }).afterClosed().subscribe({
      next:(res)=>{
        if(res){
          this.cursosService.editarCurso(curso.id,res).subscribe({
            next:(val)=>this.Cursos = val
          })
        }
      }
    })
}
}
