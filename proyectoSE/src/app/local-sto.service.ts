import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStoService {

  constructor() { }

  actualizarLS(){

  }

  traerLS(data:string, rubro:string, id:number){
    if(data == 'companias'){
      console.log(rubro)
      let companias = JSON.parse(localStorage.getItem("companys") || '{}').restaurantes
      console.log(companias)

      companias.forEach((element: any) => {
        if(element.id == (id)){
          console.log(element)
        }
      });

      // return prueba;
    }
  }

}
