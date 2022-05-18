import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tema2',
  templateUrl: './tema2.component.html',
  styleUrls: ['./tema2.component.css']
})
export class Tema2Component implements OnInit {
  pro={
   codigo:0,
   descripcion:'',
   preciou:0,
   preciod:0
  }

  productos = [{codigo:1, descripcion:'Chocolate con relleno de frutilla', preciou:3, preciod:33},
               {codigo:2, descripcion:'Chocolate blanco', preciou:7, preciod:79},
               {codigo:3, descripcion:'Chocolate con almendras', preciou:4,preciod:40},
              ];

  hayRegistros() {
    return this.productos.length>0;              
  }

  borrar(pro: { codigo: number; }) {
    for(let x=0;x<this.productos.length;x++)
      if (this.productos[x].codigo==pro.codigo)
      {
        this.productos.splice(x,1);
        return;
      }
  }

  agregar() {
    for(let x=0;x<this.productos.length;x++)
    if (this.productos[x].codigo==this.pro.codigo)
    {
      alert('Pedido realizado');
      return;
    }        
    this.productos.push({codigo:this.pro.codigo,
                         descripcion:this.pro.descripcion,
                         preciou:this.pro.preciou,
                         preciod:this.pro.preciod });
    this.pro.codigo=0;
    this.pro.descripcion='';
    this.pro.preciou=0;   
    this.pro.preciod=0; 
  }

  seleccionar(pro: { codigo: number; descripcion: string; preciou: number;  preciod: number;}) {
    this.pro.codigo=pro.codigo;
    this.pro.descripcion=pro.descripcion;
    this.pro.preciou=pro.preciou;
    this.pro.preciod=pro.preciod;
  }

  
  

  constructor() { }

  ngOnInit() {
  }
  

}
