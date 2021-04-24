import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-administrativos',
  templateUrl: './administrativos.component.html',
  styleUrls: ['./administrativos.component.css']
})
export class AdministrativosComponent implements OnInit {
  formulario1 = new FormGroup({
    rut: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.compose([Validators.required])),
    apellido: new FormControl('', Validators.compose([Validators.required])),
    edad: new FormControl('', Validators.compose([Validators.required])),
    cargo: new FormControl('', Validators.compose([Validators.required])),
    sueldo: new FormControl('', Validators.compose([Validators.required])),
  })

  formulario2 = new FormGroup({
    rut: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.compose([Validators.required])),
    apellido: new FormControl('', Validators.compose([Validators.required])),
    edad: new FormControl('', Validators.compose([Validators.required])),
    cargo: new FormControl('', Validators.compose([Validators.required])),
    sueldo: new FormControl('', Validators.compose([Validators.required])),
  })
  actual_rut: string = "";
  administrativos: Administrativo[] = []
  constructor() { }

  ngOnInit(): void {
    this.administrativos.push(new Administrativo("1234567-8", "Juan", "Perez", 25, "Gerente", 1500000));
  }
  agregar(){
    console.log("agregar")
    this.administrativos.push(new Administrativo(this.formulario1.value.rut, this.formulario1.value.nombre, this.formulario1.value.apellido, this.formulario1.value.edad, this.formulario1.value.cargo, this.formulario1.value.sueldo));
    this.formulario1.controls['rut'].setValue("");
    this.formulario1.controls['nombre'].setValue("");
    this.formulario1.controls['apellido'].setValue("");
    this.formulario1.controls['edad'].setValue("");
    this.formulario1.controls['cargo'].setValue("");
    this.formulario1.controls['sueldo'].setValue("");
  }
  editar(rut:string){
    this.actual_rut = rut;
    let obj = this.administrativos.find(o => o.rut === rut);
    if (obj != null){
     this.formulario2.controls['rut'].setValue(obj.rut);
     this.formulario2.controls['nombre'].setValue(obj.nombre);
     this.formulario2.controls['apellido'].setValue(obj.apellido);
     this.formulario2.controls['edad'].setValue(obj.edad);
     this.formulario2.controls['cargo'].setValue(obj.cargo);
     this.formulario2.controls['sueldo'].setValue(obj.sueldo);
    }
  }
  EditarSubmit() {
    if (this.formulario2.valid) {
      let objIndex = this.administrativos.findIndex((obj => obj.rut == this.actual_rut));
      this.administrativos[objIndex].rut = this.formulario2.value.rut;
      this.administrativos[objIndex].nombre = this.formulario2.value.nombre;
      this.administrativos[objIndex].apellido = this.formulario2.value.apellido;
      this.administrativos[objIndex].edad = this.formulario2.value.edad;
      this.administrativos[objIndex].cargo = this.formulario2.value.cargo;
      this.administrativos[objIndex].sueldo = this.formulario2.value.sueldo;
    }
  }
  eliminar(rut:string){
    this.administrativos = this.administrativos.filter(i => i.rut != rut);
  }

}
class Administrativo{
  constructor(public rut:string,public nombre:string,public apellido:string,public edad:number, public cargo:string, public sueldo:number){}
}
