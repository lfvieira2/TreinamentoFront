import { CarroService } from './../carro.service';
import { Carro } from './../../dominio/Carro';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-carro',
  templateUrl: './form-carro.component.html',
  styleUrls: ['./form-carro.component.css']
})
export class FormCarroComponent implements OnInit {
  titulo = 'Cadastro de Carros';
  carro: Carro = new Carro();
  formulario: FormGroup;

  constructor(private cs : CarroService, private fb: FormBuilder,private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.formulario = this.fb.group({
      nome : new FormControl('', Validators.compose([Validators.required,Validators.minLength(0),  Validators.maxLength(20)]))
     });
    const id =  this.activatedRoute.snapshot.paramMap.get('id_carro');
    this.activatedRoute.queryParams.subscribe(resp=>{
      if(resp.carro){
        this.carro = JSON.parse(resp.carro);    
      }     
    });


  }

  voltar(){
    this.router.navigate(['carro']);
  }

  recebendoPorta( listaporta ){
    this.carro.portas = listaporta;
    
    
  }

  
  novo() {
    this.carro = new Carro();
    
  }


  atualizar(c: Carro) {
    this.cs.update(c).subscribe(
      dadosDoServido => {
        alert("Carro Atualizado com sucesso!");
        
       this.router.navigate(['/carro']);
       
      }, error => {
        if (error.ok == false && error.status == 409 ) {
          alert("Ja existe um Carro com esse nome! Por favor altere! ");
       }

      }
    );
  }

  salvar() {
    if( this.carro.portas.length==0){
    alert("Você precisa inserir uma porta!");
    }
    this.cs.create(this.carro).subscribe(
      dadosDoServidor => {
       alert("Criado com Suecesso!");
        this.router.navigate(['/carro']);
        
        
      }, error => {
        if (error.ok == false && error.status == 409 ) {
        alert("Ja existe um Carro com esse nome! Por favor altere! ");
       }
        
       }
    );
  
  }

  createOrUpdate(){
    if (this.carro.id_carro) {
      this.atualizar(this.carro);
    } else {
      this.salvar();
    }
  }
  
}