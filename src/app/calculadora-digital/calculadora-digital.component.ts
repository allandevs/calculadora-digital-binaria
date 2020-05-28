import { Component, OnInit } from '@angular/core';
import { ValidacaoService } from './../validacao.service';

@Component({
  selector: 'app-calculadora-digital',
  templateUrl: './calculadora-digital.component.html',
  styleUrls: ['./calculadora-digital.component.scss']
})
export class CalculadoraDigitalComponent implements OnInit {
  
  public resultado="";
  constructor(private validacao:ValidacaoService) { }

  
  ngOnInit() {
  }

  public montarResultado(digito:string):void {
    if(this.validacao.ehValidaExpressao(digito,this.resultado)){
      this.resultado+=digito;      
    }
  }

  public limpar():void{
    this.resultado="";
  }

  public finalizar():void{
    this.resultado=eval(this.resultado).toString();
  }
  
}
