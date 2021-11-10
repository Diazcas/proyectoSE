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

  agregarProdCarrito(prod: any) {
    let carrito = localStorage.getItem('carritoActual') || "[]";
    if(JSON.parse(carrito).length == 0){
      carrito = carrito.replace(']', `${JSON.stringify(prod)}]`)
      localStorage.setItem('carritoActual',carrito)
      console.log('entre aqui porque no hay')
    } else{
      carrito = carrito.replace(']', `,${JSON.stringify(prod)}]`)
      localStorage.setItem('carritoActual',carrito)
      console.log(JSON.parse(carrito))
    }
  }

  //--------------------------TRAER CLIENTES----------------------

  traerTodosCli() {
    let todos = JSON.parse(localStorage.getItem('clientes') || '')
    return todos;
  }

  buscarCli(cliente: any) {
    let todos = JSON.parse(localStorage.getItem('clientes') || '')
    let clienteEncontrado = todos.filter((item: any) => item.email == cliente.email && item.contrasenia == cliente.password)[0]

    if (clienteEncontrado != undefined) {
      console.log('encontrado');
      return clienteEncontrado.id
    }
    // console.log(todos)
    // console.log(cliente)
    // console.log(clienteEncontrado)
    return false;
  }

  buscarCliId(cliente: any) {
    let todos = JSON.parse(localStorage.getItem('clientes') || '')
    let clienteEncontrado = todos.filter((item: any) => item.id == cliente)[0]

    if (clienteEncontrado != undefined) {
      console.log('encontrado');
      return clienteEncontrado.nombre + ' ' + clienteEncontrado.apellido;
    }
    // console.log(todos)
    // console.log(cliente)
    // console.log(clienteEncontrado)
    return false;
  }

  aniadirCli(data: JSON) {
    let traerjson = localStorage.getItem('clientes') || '';
    console.log(traerjson)
    let todos = JSON.parse(localStorage.getItem('clientes') || '');

    let stringj = JSON.stringify(data)
    let stringAgregar = `,"id":"${todos.length}"}]`
    stringj = stringj.replace('{"', ',{"')
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

  //--------------------------ORDEN----------------------
  agregarOrden(orden:any){
    let nuevaOrden = JSON.stringify(orden)
    let ordenes = (localStorage.getItem('ordenes')||'')

    ordenes = ordenes.replace('}]}]',`}]},${nuevaOrden}]`)

    console.log(JSON.parse(ordenes))
    localStorage.setItem('ordenes', ordenes)
    this.borrarLocal();
  }

  borrarLocal(){
    localStorage.removeItem('carritoActual')
    localStorage.removeItem('direccion')
    localStorage.removeItem('cuentaTotalActual')
    alert('Carrito, direccion y cuenta total eliminados')
  }


}
