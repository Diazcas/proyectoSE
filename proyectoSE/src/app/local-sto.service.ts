import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStoService {
  constructor() {}

  traerProducto(categoria: any, compania: any, productoid: any) {
    console.log(categoria, compania, productoid);
    let item = JSON.parse(localStorage.getItem('companys') || '{}')[categoria]
      .datos[compania].productos[productoid];
    return item;
  }

  traerCarrito(id: any) {
    let carrito = JSON.parse(localStorage.getItem('carrito') || '{}')[id];
    return carrito;
  }

  traerCategorias() {
    let item = JSON.parse(localStorage.getItem('companys') || '{}');
    // console.log(item)
    let categorias: any[] = [];
    item.forEach((Element: any) => {
      categorias.push(Element.tipo);
    });
    // console.log(categorias)
    return categorias;
  }

  traerCompanias(categoria: string) {
    let item = JSON.parse(localStorage.getItem('companys') || '{}');
    // console.log(categoria)
    // console.log(item)
    let companias = item.filter((compa: any) => compa.tipo == categoria)[0]
      .datos;
    return companias;
  }

  subirCatActual(categoria: string) {
    localStorage.setItem('categoria', categoria);
  }

  verCatActual() {
    let actual = localStorage.getItem('categoria') || '{}';
    return actual;
  }

  verCompaniaActual(categoria: string, id: string) {
    let item = JSON.parse(localStorage.getItem('companys') || '{}');
    let compania = item.filter((compa: any) => compa.tipo == categoria)[0]
      .datos[id];
    // console.log(compania);
    return compania;
  }

  agregarProdCarrito(prod: any) {
    let carrito = localStorage.getItem('carritoActual') || '[]';
    if (JSON.parse(carrito).length == 0) {
      carrito = carrito.replace(']', `${JSON.stringify(prod)}]`);
      localStorage.setItem('carritoActual', carrito);
      console.log('entre aqui porque no hay');
    } else {
      carrito = carrito.replace(']', `,${JSON.stringify(prod)}]`);
      localStorage.setItem('carritoActual', carrito);
      console.log(JSON.parse(carrito));
    }
  }

  //--------------------------TRAER CLIENTES----------------------

  traerTodosCli() {
    let todos = JSON.parse(localStorage.getItem('clientes') || '');
    return todos;
  }

  buscarCli(cliente: any) {
    let todos = JSON.parse(localStorage.getItem('clientes') || '');
    let clienteEncontrado = todos.filter(
      (item: any) =>
        item.email == cliente.email && item.contrasenia == cliente.password
    )[0];

    if (clienteEncontrado != undefined) {
      console.log('encontrado');
      return clienteEncontrado.id;
    }
    // console.log(todos)
    // console.log(cliente)
    // console.log(clienteEncontrado)
    return false;
  }

  buscarCliId(cliente: any) {
    let todos = JSON.parse(localStorage.getItem('clientes') || '');
    let clienteEncontrado = todos.filter((item: any) => item.id == cliente)[0];

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
    console.log(traerjson);
    let todos = JSON.parse(localStorage.getItem('clientes') || '');

    let stringj = JSON.stringify(data);
    let stringAgregar = `,"id":"${todos.length}"}]`;
    stringj = stringj.replace('{"', ',{"');
    stringj = stringj.replace('}', stringAgregar);
    traerjson = traerjson.replace(']', stringj);
    console.log(traerjson);
    localStorage.setItem('clientes', traerjson);
  }

  //--------------------------DRIVER----------------------

  traerDrivers() {
    let todos = JSON.parse(localStorage.getItem('drivers') || '{}');
    return todos;
  }

  driverActive() {
    let driver = JSON.parse(localStorage.getItem('driver') || '{}');
    let driverActive = JSON.parse(localStorage.getItem('drivers') || '{}')[
      driver
    ];
    return driverActive;
  }

  actualizarDriver(id: any) {
    localStorage.setItem('driver', id);
  }

  traerOrdenesActuales() {
    let ordenes: any,
      ordenesArray,
      tieneO = false;
    ordenes = ['[]'];
    ordenesArray = JSON.parse(localStorage.getItem('ordenes') || '');
    ordenesArray.forEach((element: any) => {
      if (element.driverId == localStorage.getItem('driver')) {
        if (ordenes[0] == '[]') {
          if (element.driverId != null && element.estado != 3) {
            ordenes[0] = element;

            tieneO = true;
          }
        } else {
          if (element.driverId != null && element.estado != 3) {
            ordenes.push(element);

            tieneO = true;
          }
        }
      }
    });
    return [ordenes, tieneO];
  }

  traerOrdenesDisponibles() {
    let ordenes: any,
      ordenesArray,
      tieneO = false;
    ordenes = ['[]'];
    ordenesArray = JSON.parse(localStorage.getItem('ordenes') || '');
    ordenesArray.forEach((element: any) => {
      if (ordenes[0] == '[]') {
        if (element.driverId == null && element.estado == null) {
          ordenes[0] = element;
          tieneO = true;
        }
      } else {
        if (element.driverId == null && element.estado == null) {
          ordenes.push(element);
          tieneO = true;
        }
      }
    });
    return [ordenes, tieneO];
  }

  traerOrdenesEntregadas() {
    let ordenes: any,
      ordenesArray,
      tieneO = false;
    ordenes = ['[]'];
    ordenesArray = JSON.parse(localStorage.getItem('ordenes') || '');
    console.log(ordenesArray);
    ordenesArray.forEach((element: any) => {
      if (element.driverId == localStorage.getItem('driver')) {
        if (ordenes[0] == '[]') {
          if (element.driverId != null && element.estado == 3) {
            tieneO = true;
            ordenes[0] = element;
          }
        } else {
          if (element.driverId != null && element.estado == 3) {
            tieneO = true;
            ordenes.push(element);
          }
        }
      }
    });
    return [ordenes, tieneO];
  }

  //--------------------------ORDEN----------------------
  agregarOrden(orden: any) {
    let nuevaOrden = JSON.stringify(orden);
    let ordenes = localStorage.getItem('ordenes') || '';

    ordenes = ordenes.replace('}]}]', `}]},${nuevaOrden}]`);

    console.log(JSON.parse(ordenes));
    localStorage.setItem('ordenes', ordenes);
    this.borrarLocal();
  }

  borrarLocal() {
    localStorage.removeItem('carritoActual');
    localStorage.removeItem('direccion');
    localStorage.removeItem('cuentaTotalActual');
    alert('Carrito, direccion y cuenta total eliminados');
  }

  //--------------------------TABLAS----------------------
  traerTablaEmpresas() {
    let tableData: any = ['[]']
    let categorias = this.traerCategorias();
    for (let i = 0; i < categorias.length; i++) {
      let empresas = this.traerCompanias(categorias[i]);
      // console.log(categorias)
      // console.log(empresas)

      for (let j = 0; j < empresas.length; j++) {
        let json = {
          id: empresas[j].id,
          banner: empresas[j].banner,
          descripcion: empresas[j].descripcion,
          nombre: empresas[j].nombre,
          logo: empresas[j].logo,
          puntuacion: empresas[j].puntuacion,
          empresa: categorias[i],
          productos: empresas[j].productos,
        };
        // console.log(json)
        if (tableData[0] == '[]') {
          tableData[0] = json;
        } else {
          tableData.push(json);
        }
      }
    }
    let tableHead = ['Noº', 'Nombre', 'Clasificación', 'Valoracion'];
    let tableName = 'Tabla Empresas'

    return [tableData, tableHead, tableName];
  }

  traerTablaProductos() {
    let tableData: any = ['[]']
    let categorias = this.traerCategorias();
    
    for (let i = 0; i < categorias.length; i++) {
      let empresas = this.traerCompanias(categorias[i]);
      // console.log(categorias)
      // console.log(empresas)

      for (let j = 0; j < empresas.length; j++) {

        console.log(empresas[j])
        let productos = this.verCompaniaActual(categorias[i], empresas[j].id).productos
        console.log(productos)

        for (let l = 0; l < productos.length; l++) {
          let json = {
            id: productos[l].id,
            detalle: productos[l].detalle,
            img: productos[l].img,
            empresa: empresas[j].nombre,
            precio: productos[l].precio,
            nombre: productos[l].nombre
          };
  
          // console.log(json)
          if (tableData[0] == '[]') {
            tableData[0] = json;
          } else {
            tableData.push(json);
          }
        }

      }
    }

    let tableHead = ['Noº', 'Nombre', 'Empresa', 'Descripcion', 'Precio'];
    let tableName = 'Tabla Productos'

    return [tableData, tableHead, tableName];
  }
}
