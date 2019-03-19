import { Porta } from './../dominio/Porta';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PortaService {

  lista: Porta[] = [];
  listaAux: Porta[] = [];
  filtrando: boolean = false;

  constructor() { }

  adicionar(p: Porta){
    this.lista.push(p);  
   
 }

deletar(p: Porta){
let posicaoArray = this.lista.indexOf(p);
 this.lista = this.lista.filter((tel, posicao)=>{
   if (posicao != posicaoArray){
     return tel;
   }
});
}
}