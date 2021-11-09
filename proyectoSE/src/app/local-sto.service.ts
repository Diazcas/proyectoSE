import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStoService {

  constructor() { }

  traerProducto(categoria: any, compania: any, productoid: any) {
    console.log(categoria, compania, productoid)
    let item = JSON.parse(localStorage.getItem("companys") || '{}')[categoria].datos[compania].productos[productoid]
    return item;

  }

  traerCarrito(id: any) {
    let carrito = JSON.parse(localStorage.getItem('carrito') || '{}')[id];
    return carrito;
  }

  traerCategorias() {
    let item = JSON.parse(localStorage.getItem("companys") || '{}')
    // console.log(item)
    let categorias: any[] = [];
    item.forEach((Element: any) => {
      categorias.push(Element.tipo)
    });
    // console.log(categorias)
    return categorias;
  }

  traerCompanias(categoria: string) {
    let item = JSON.parse(localStorage.getItem('companys') || '{}')
    // console.log(categoria)
    // console.log(item)
    let companias = item.filter((compa: any) => compa.tipo == categoria)[0].datos
    return companias;
  }

  subirCatActual(categoria: string) {
    localStorage.setItem('categoria', categoria);

  }

  verCatActual() {
    let actual = (localStorage.getItem('categoria') || '{}')
    return actual;
  }

  verCompaniaActual(categoria: string, id: string) {
    let item = JSON.parse(localStorage.getItem('companys') || '{}')
    let compania = item.filter((compa: any) => compa.tipo == categoria)[0].datos[id]
    // console.log(compania);
    return compania;
  }

  //--------------------------TRAER CLIENTES----------------------

  traerTodosCli() {
    let todos = JSON.parse(localStorage.getItem('clientes') || '')
    return todos;
  }

  buscarCli() {
    let todos = JSON.parse(localStorage.getItem('clientes') || '')
    console.log(todos)
  }

  aniadirCli(data: JSON) {
    let traerjson = localStorage.getItem('clientes') || '';
    console.log(traerjson)
    let todos = JSON.parse(localStorage.getItem('clientes') || '');
    
    let stringj = JSON.stringify(data)
    let stringAgregar = `,"id":"${todos.length}"}]`
    stringj = stringj.replace('{"',',{"')
    stringj = stringj.replace('}', stringAgregar)
    traerjson = traerjson.replace(']', stringj)
    console.log(traerjson)
    localStorage.setItem('clientes', traerjson)
  }



  //--------------------------DRIVER----------------------

  traerDrivers() {
    let todos = JSON.parse(localStorage.getItem('drivers') || "{}");
    return todos;
  }

  driverActive() {
    let driver = JSON.parse(localStorage.getItem('driver') || "{}");
    let driverActive = JSON.parse(localStorage.getItem('drivers') || "{}")[driver];
    return driverActive;
  }

  actualizarDriver(id: any) {
    localStorage.setItem('driver', id)
  }


}
