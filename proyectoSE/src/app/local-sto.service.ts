import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStoService {

  constructor() { }

  traerProducto(categoria:any,compania:any,productoid:any){
    console.log(categoria, compania, productoid)
    let item = JSON.parse(localStorage.getItem("companys") || '{}')[categoria].datos[compania].productos[productoid]
    return item;

  }

  traerCarrito(id:any) {
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

  traerCompanias(categoria:string){
    let item = JSON.parse(localStorage.getItem('companys') || '{}')
    // console.log(categoria)
    // console.log(item)
    let companias = item.filter((compa: any) => compa.tipo == categoria)[0].datos
    return companias;
  }

  subirCatActual(categoria:string){
    localStorage.setItem('categoria', categoria);

  }

  verCatActual(){
    let actual = (localStorage.getItem('categoria') || '{}')
    return actual;
  }

  verCompaniaActual(categoria:string, id:string){
    let item = JSON.parse(localStorage.getItem('companys') || '{}')
    let compania = item.filter((compa: any) => compa.tipo == categoria)[0].datos[id]
    // console.log(compania);
    return compania;
  }

  //--------------------------DRIVER----------------------

  traerDrivers(){
    let todos = JSON.parse(localStorage.getItem('drivers') || "{}");
    return todos;
  }

  driverActive(){
    let driver = JSON.parse(localStorage.getItem('driver') || "{}");
    let driverActive = JSON.parse(localStorage.getItem('drivers') || "{}")[driver];
    return driverActive;
  }

  actualizarDriver(id:any){
    localStorage.setItem('driver', id)
  }


}
