import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ConnectService {
  constructor(private httpClient: HttpClient) {}

  backendHost = 'http://localhost:8888';
  // backendHost = 'https://backendse.herokuapp.com';

  //-----------------------------------------Peticiones para Administradores

  async iniciarSesionAdmin(usuario: any) {
    return new Promise((resolve) => {
      this.httpClient.get(`${this.backendHost}/admin`).subscribe((res: any) => {
        // console.log(res);

        let encontrado =
          res.filter(
            (item: any) =>
              item.email == usuario.email && item.password == usuario.password
          )[0] || undefined;
        // console.log(encontrado);

        if (encontrado != undefined) {
          resolve(true);
        } else {
          resolve(false);
        }
      });
    });
  }

  //-----------------------------------------Peticiones para Clientes

  async iniciarSesionCliente(usuario: any) {
    return new Promise((resolve) => {
      this.httpClient
        .get(`${this.backendHost}/clientes`)
        .subscribe((res: any) => {
          // console.log(res);

          let encontrado =
            res.filter(
              (item: any) =>
                item.email == usuario.email && item.password == usuario.password
            )[0] || undefined;
          // console.log(encontrado);

          if (encontrado != undefined) {
            resolve([
              true,
              encontrado._id,
              encontrado.nombre,
              encontrado.apellido,
            ]);
          } else {
            resolve([false]);
          }
        });
    });
  }

  async guardarCliente(cliente: any) {
    return new Promise((resolve) => {
      this.httpClient
        .post(`${this.backendHost}/clientes`, cliente)
        .subscribe((res: any) => {
          resolve(res);
        });
    });
  }

  //-----------------------------------------Peticiones para Drivers

  aVerificarDri(driver: any) {
    let encontrado;
    return new Promise((resolve) => {
      this.httpClient
        .get(`${this.backendHost}/driver`)
        .subscribe((res: any) => {
          encontrado = res.filter(
            (item: any) =>
              item.correo == driver.email && item.password == driver.password
          )[0];
          if (encontrado != undefined) {
            // console.log(encontrado);
            resolve([
              true,
              encontrado._id,
              `${encontrado.pNombre} ${encontrado.pApellido}`,
            ]);
          } else {
            resolve(false);
          }
        });
    });
  }

  async verificarDriver(driver: any) {
    let estado: any;
    if (driver == null || driver == undefined) {
      return false;
    } else {
      estado = await this.aVerificarDri(driver);
      if (estado[0]) {
        // console.log('encontrado');
        return estado;
      } else {
        // console.log('no se encontro');
        return false;
      }
    }
  }

  async guardarDriver(driver: any) {
    return new Promise((resolve) => {
      this.httpClient
        .post(`${this.backendHost}/driver`, driver)
        .subscribe((res: any) => {
          resolve(res);
        });
    });
  }

  async actualizarDriver(driver: any) {
    return new Promise((resolve) => {
      this.httpClient
        .put(`${this.backendHost}/driver/${driver._id}`, driver)
        .subscribe((res: any) => {
          resolve(res);
        });
    });
  }

  async eliminarDriverId(driver: any) {
    return new Promise((resolve) => {
      this.httpClient
        .get(`${this.backendHost}/driver/eliminar/${driver._id}`)
        .subscribe((res: any) => {
          resolve(res);
        });
    });
  }

  async tablaMotorista() {
    return new Promise((resolve) => {
      this.httpClient
        .get(`${this.backendHost}/driver`)
        .subscribe((res: any) => {
          let tableHead = ['Noº', 'Nombre', 'Estado', 'Cambiar estado'];
          let tableName = 'Tabla Motoristas';
          resolve([res, tableHead, tableName]);
        });
    });
  }

  //-----------------------------------------Peticiones para Categorias

  async traerCategorias() {
    return new Promise((resolve) => {
      this.httpClient
        .get(`${this.backendHost}/categorias`)
        .subscribe((res: any) => {
          // console.log(res)
          resolve(res);
        });
    });
  }

  //-----------------------------------------Peticiones para Empresas

  async tablaEmpresas() {
    return new Promise((resolve) => {
      this.httpClient
        .get(`${this.backendHost}/empresas`)
        .subscribe((res: any) => {
          let tableHead = ['Noº', 'Nombre', 'Clasificación', 'Valoracion'];
          let tableName = 'Tabla Empresas';
          resolve([res, tableHead, tableName]);
        });
    });
  }

  async traerEmpresas(categoriaId: string) {
    return new Promise((resolve) => {
      this.httpClient
        .get(`${this.backendHost}/empresas/${categoriaId}`)
        .subscribe((res: any) => {
          resolve(res);
        });
    });
  }

  async traerEmpresasNombre(nombreCategoria: string) {
    return new Promise((resolve) => {
      this.httpClient
        .get(`${this.backendHost}/empresas/nombre/${nombreCategoria}`)
        .subscribe((res: any) => {
          resolve(res);
        });
    });
  }

  async traerEmpresaId(id: string) {
    return new Promise((resolve) => {
      this.httpClient
        .get(`${this.backendHost}/empresas/empresaId/${id}`)
        .subscribe((res: any) => {
          resolve(res);
        });
    });
  }

  //-----------------------------------------Peticiones para Productos

  async traerProductosPorIdCate(id: string) {
    return new Promise((resolve) => {
      this.httpClient
        .get(`${this.backendHost}/productos/${id}`)
        .subscribe((res: any) => {
          resolve(res);
        });
    });
  }

  async tablaProductos() {
    return new Promise((resolve) => {
      this.httpClient
        .get(`${this.backendHost}/productos`)
        .subscribe((res: any) => {
          let tableHead = ['Noº', 'Nombre', 'Empresa', 'Descripcion', 'Precio'];
          let tableName = 'Tabla Productos';
          resolve([res, tableHead, tableName]);
        });
    });
  }

  //-----------------------------------------Peticiones para Ordenes

  async tablaOrdenes() {
    return new Promise((resolve) => {
      this.httpClient
        .get(`${this.backendHost}/ordenes`)
        .subscribe((res: any) => {
          let tableHead = [
            'Noº',
            'Cliente',
            'Dirección',
            'Precio Total',
            'Motorista',
            'Estado'
          ];
          let tableName = 'Tabla Ordenes';
          resolve([res, tableHead, tableName]);
        });
    });
  }

  async eliminarOrdenId(orden: any) {
    return new Promise((resolve) => {
      this.httpClient
        .get(`${this.backendHost}/ordenes/eliminar/${orden._id}`)
        .subscribe((res: any) => {
          resolve(res);
        });
    });
  }

  async guardarOrden(orden: any) {
    return new Promise((resolve) => {
      this.httpClient
        .post(`${this.backendHost}/ordenes`, orden)
        .subscribe((res: any) => {
          resolve(res);
        });
    });
  }

  async actualizarOrden(orden: any) {
    return new Promise((resolve) => {
      this.httpClient
        .put(`${this.backendHost}/ordenes/${orden._id}`, orden)
        .subscribe((res: any) => {
          resolve(res);
        });
    });
  }

  async traerOrdenDisponible() {
    return new Promise((resolve) => {
      this.httpClient
        .get(`${this.backendHost}/ordenes/disponible`)
        .subscribe((res: any) => {
          // console.log(res);
          resolve(res);
        });
    });
  }

  async traerOrdenSeguimiento(id: any) {
    return new Promise((resolve) => {
      this.httpClient
        .get(`${this.backendHost}/ordenes/seguimiento/${id}`)
        .subscribe((res: any) => {
          // console.log(res);
          resolve(res);
        });
    });
  }

  async traerOrdenFinalizadas(id: any) {
    return new Promise((resolve) => {
      this.httpClient
        .get(`${this.backendHost}/ordenes/finalizadas/${id}`)
        .subscribe((res: any) => {
          // console.log(res);
          resolve(res);
        });
    });
  }
}
