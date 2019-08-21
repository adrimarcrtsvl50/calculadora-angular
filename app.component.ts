import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  var1 = 10;
  var2 = 20;
  deshabilitado = true;
  nombre: string;
  constructor(){
  setTimeout(() =>{
  this.deshabilitado = false;
  }, 3000)


  }
  ejecutar(){
  alert("Ejecutando...")
  }

num1:number;
  num2:number;
  rta:number;
  operacion(num1:number,num2:number,opera:string): number
  {
    switch(opera)
    {
      case "suma":
        return this.rta = this.num1 + this.num2;
      case "resta":
        return this.rta = this.num1 - this.num2;
      case "multiplicacion":
        return this.rta = this.num1 * this.num2;
      case "dividir":
        if(this.num2 == 0)
        {
        alert("No se puede dividr por cero");
        return null;
        }
        else
        {
        return this.rta = this.num1 / this.num2;
        }
      case "modulo":
        if(this.num2 == 0)
        return null;
        else
        return this.rta = this.num1 % this.num2;
      case "limpiar":
        return null;
    }
  }
  reset()
  {
    this.num1 = null;
    this.num2 = null;
    this.rta = null;
  }


val1:number;
val2:number;
sum:number;
res:number;
mult:number;
div:number;
mod:number;

Operacion(){
this.sum=this.val1+this.val2;
this.res=this.val1-this.val2;
this.mult=this.val1*this.val2;
this.div=this.val1/this.val2;
this.mod= this.val1%this.val2;
  
  }
clear()
  {
    this.val1 = null;
    this.val2 = null;
    this.sum = null;
    this.res = null;
    this.mult = null;
    this.div = null;
    this.mod = null;

  }
}

