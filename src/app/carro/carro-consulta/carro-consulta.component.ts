import { CarroService } from './../carro.service';
import { Carro } from './../../dominio/Carro';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carro-consulta',
  templateUrl: './carro-consulta.component.html',
  styleUrls: ['./carro-consulta.component.css']
})
export class CarroConsultaComponent implements OnInit {
  carros : Carro[]=[];
  carro: Carro = new Carro();
  nome: string ='';
  constructor(private cs: CarroService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.findAll();
  }
  
  findAll(){
    this.cs.findAll().subscribe(dadosDoServidor=>{
      this.carros =dadosDoServidor;  
    }, error=>{});
    }
    
    searchByName(){
      this.cs.searchByName(this.nome).subscribe(dadosDoServidor=>{
      this.carros = dadosDoServidor;
      },
        error=>{});
    
    }
    
    deleteID(id: number): string {
      let resposta: string;
    
      this.cs.delete(id).subscribe(dadosDoServidor => {
        alert("Registro deletado Com sucesso!")
        this.findAll();
      }, error => {
      });
      return resposta;
    }
    
    novo() {
      this.carro = new Carro();
      this.router.navigate(['carro/cadastro']);
    }



    update(c: Carro) {
      this.carro = c;
      this.router.navigate(['carro/cadastro'],{
        queryParams: { nome: 'Luiz ', carro: JSON.stringify(c)},
        skipLocationChange: true
      });


    
    }

  }

