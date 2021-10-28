import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStoService {

  constructor() { }

  actualizarLS() {

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


}
