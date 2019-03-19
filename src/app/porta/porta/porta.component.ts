import { PortaService } from './../porta.service';
import { Porta } from './../../dominio/Porta';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-porta',
  templateUrl: './porta.component.html',
  styleUrls: ['./porta.component.css']
})
export class PortaComponent implements OnInit {

  mostarDialogo: boolean = false;
  porta: Porta = new Porta();
  filtro: string = '';
  cols: any[] = [];
  formulario: FormGroup;

  @Input() listaRecebida: Porta[]=[];
  @Output() emissorPorta = new EventEmitter(); 
 
  constructor(private ps:PortaService, private fb: FormBuilder) { }

  ngOnInit() {

    this.ps.lista = this.listaRecebida;

    this.formulario = this.fb.group({     
      
      descricao: new FormControl('', Validators.compose([Validators.required, Validators.minLength(0), Validators.maxLength(20)]))
    });

    this.cols = [
      { field: 'id_porta', header: 'ID' },
      { field: 'descricao', header: 'DESCRIÇAO' },
      { field: 'opcoes', header: 'OPÇÔES' }

    ];
  }

  novo() {
    this.mostarDialogo = true;
  }

  taNaLista(p : Porta){
    for(let i = 0; i < this.ps.lista.length; i++){
      if(this.ps.lista[i].descricao == p.descricao){
        return true;
      } 
    }
    return false;
  }

  create() {
    if( this.listaRecebida.length>=5){
      alert("Pode ser adicionado no maximo 5 portas")
      
      return false;
    }
    if( !this.taNaLista(this.porta)){
      this.ps.adicionar(this.porta);
      this.emissorPorta.emit(this.ps.lista);
      this.mostarDialogo = false;
      this.porta = new Porta();

    }
      
    }
     modalExcluir(p: Porta) {
    this.ps.deletar(p);
    
    
    this.emissorPorta.emit(this.ps.lista);
    alert("Porta Excluida Com Sucesso!");
    
  }
}