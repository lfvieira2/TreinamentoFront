import { Carro } from './../dominio/Carro';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  HOST: string;
  PORTA_SERVICO: string;
  NS_CARRO:string = '/carro';
  URL: string;
  constructor(private http: HttpClient) {
    this.HOST = environment.apiUrl;
    this.PORTA_SERVICO = environment.porta
    this.URL= `${this.HOST}${this.PORTA_SERVICO}`;
   }
   getHeaders(){
    let headers = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json");
    return headers;
  }
  findAll(): Observable<Carro[]>{
  return this.http.get<Carro[]>(`${this.URL}${this.NS_CARRO}`);
  }
  searchByName(nome: string): Observable<Carro[]>{
   return this.http.get<Carro[]>(`${this.URL}${this.NS_CARRO}/${nome}`);
  }
  
  create(c: Carro): Observable<Carro>{
   return this.http.post<Carro>(`${this.HOST}${this.PORTA_SERVICO}${this.NS_CARRO}`,c);
  }
  
  update(c: Carro): Observable<Carro>{
    console.log(c);
    
    return this.http.put<Carro>(`${this.HOST}${this.PORTA_SERVICO}${this.NS_CARRO}`,c);
   }
   delete(id: number): Observable<string>{
  return this.http.delete<string>(`${this.HOST}${this.PORTA_SERVICO}${this.NS_CARRO}/${id}`)
   }
  }
