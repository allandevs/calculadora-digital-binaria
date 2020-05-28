import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidacaoService {

  constructor() { }
  public ehOperador(caractere:string):boolean{
    if(caractere=="+" || caractere=="-" || caractere=="/" || caractere=="*"){
      return true;
    } else {
      return false;
    }
  }

  public ehZero(caractere:string):boolean{
    if(caractere=="0"){
      return true;
    } else {
      return false;
    }
  }


  public ehZeroDepoisDeOperador(caractere:string, expressao:string):boolean{
    
    if(this.ehOperador(expressao.charAt(expressao.length-1)) && this.ehZero(caractere)){
      return true;
    } else {
      return false;
    }
  }

  public ehOperadorDepoisDeOperador(caractere: string, expressao: string): boolean {
    if(this.ehOperador(expressao.charAt(expressao.length-1)) && this.ehOperador(caractere)){
      return true;
    } else {
      return false;
    }
  }

 
  public ehValidaExpressao(caractere:string, expressao:string):boolean{
    let valido:boolean = true;
    if(expressao.length==0){
      if(this.ehOperador(caractere) || this.ehZero(caractere)){
        valido=false;
      }
    } else {
      if(this.ehZeroDepoisDeOperador(caractere,expressao)){
        valido=false;
      } 
      else if(this.ehOperadorDepoisDeOperador(caractere,expressao)) {
        valido=false;
      }
    }
    return valido;
  }
  public ehOperadorBinario(caractere:string):boolean {
    if (caractere=="+") {
      return true;
    } else {
      return false;
    }
  }

  public ehZeroBinario(caractere:string):boolean {
    if (caractere=="0") {
      return true;
    } else {
      return false;
    }
  }
  
  
  public ehZeroDepoisDeOperadorBinario(caractere:string, expressao:string):boolean {
    if (this.ehOperadorBinario(expressao.charAt(expressao.length-1)) && this.ehZeroBinario(caractere)) {
      return true;
    } else {
      return false;
    }
  }

 
  public ehOperadorDepoisDeOperadorBinario(caractere:string, expressao:string):boolean {
    if (this.ehOperadorBinario(expressao.charAt(expressao.length-1)) && this.ehOperadorBinario(caractere)) {
      return true;
    } else {
      return false;
    }
  } 

  public ehValidaExpressaoBinario(caractere:string, expressao:string):boolean {
    let valido:boolean = true;
    if (expressao.length==7) {
      if (this.ehOperadorBinario(caractere) || this.ehZeroBinario(caractere)){
        valido = true;
      }
    } else {
      if (this.ehZeroDepoisDeOperadorBinario(caractere, expressao)) {
        valido = true;
      }
      else if (this.ehOperadorDepoisDeOperadorBinario(caractere, expressao)) {
        valido = false;
      }
    }
    return valido;
  }

}



