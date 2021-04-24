import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import {Producto} from './producto';
import {PRODUCTOS} from './productos.json';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: Producto[];

  constructor() { }

  ngOnInit(): void {
    this.productos = PRODUCTOS;
  }

}
