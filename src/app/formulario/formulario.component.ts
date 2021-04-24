
    import { Component, OnInit } from '@angular/core';
    import { FormControl, FormsModule } from '@angular/forms';
    import { FormGroup } from '@angular/forms';
    
    @Component({
      selector: 'app-formulario',
      templateUrl: './formulario.component.html',
      styleUrls: ['./formulario.component.css']
    })
    export class FormularioComponent implements OnInit {
    
      constructor() { }
    
      elementos = new FormControl();
    
      lista!: Producto[];
    
      auxLista!:String[];
    
      ngOnInit(): void {
        this.lista = [];
        this.auxLista=[];
      
    
      }
    
    
    
      datos!:string;
    
    
      formulario = new FormGroup({
        rut: new FormControl(''),
        nombre: new FormControl(''),
        direccion: new FormControl(''),
        telefono: new FormControl('')
    
      });
    
      actualizar(){
    
        this.auxLista = [];
        let validado: Boolean = false;
        let validaciones:number = 0;
    
      
        for(let campo in this.formulario.controls){
          
          let aux =this.formulario.controls[campo].value;
          if (aux.length>2 && aux.length <51){
            validaciones += 1;
          }
        }
    
        console.log(validaciones)
        if (validaciones ==4){
          
          
          console.log("campos validados")
          for(let campo in this.formulario.controls){  
            let aux =this.formulario.controls[campo].value;
            this.auxLista.push(aux);
          }
          let auxProducto = new Producto(this.auxLista[0],this.auxLista[1],this.auxLista[2],this.auxLista[3]);
    
          this.lista[this.lista.findIndex(element=>element.rut==auxProducto.rut)] =auxProducto;
        
    
    
      }
    }
      eliminar(){
    
        let codigoEliminar = this.formulario.value.rut;
        console.log(codigoEliminar);
    
        let index = this.lista.findIndex(element=>element.rut ===codigoEliminar);
        if (index > -1){
        this.lista.splice(index,1);
        }
    
      }
    
      metodo(){
    
        
    
        let validado: Boolean = false;
        let validaciones:number = 0;
    
        
        for(let campo in this.formulario.controls){
       
          let aux =this.formulario.controls[campo].value;
          if (aux.length>2 && aux.length <51){
            validaciones += 1;
          }
        }
    
        console.log(validaciones)
        if (validaciones ==4){
          this.auxLista =[];
          
          console.log("campos validados")
          for(let campo in this.formulario.controls){  
           let aux =this.formulario.controls[campo].value;
           this.auxLista.push(aux);
    
    
          }
          
          this.lista.push(new Producto(this.auxLista[0],this.auxLista[1],this.auxLista[2],this.auxLista[3]));
      
          
    
    
        }
        
    
    
      }
    
    
      
    }
    
    class Producto{
    
      rut:String;
      nombre:String;
      direccion:String;
      telefono:String;
      constructor(rut:String, nombre: String,direccion:String,telefono:String){
        this.rut = rut;
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
      }
    
    }