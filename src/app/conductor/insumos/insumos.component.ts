import { Component } from '@angular/core';



@Component({
  selector: 'app-insumos',
  templateUrl: './insumos.component.html',
  styleUrls: ['./insumos.component.css']
})
export class InsumosComponent {
  conceptt='';
  foliot='';
  conceptd = '';
  foliod = '';
  truck(){
    const spanElement: HTMLElement | null = document.getElementById('error')!;
    if(this.conceptt != '' && this.foliot!=''){
       
    } else {
      spanElement.textContent = 'es necesario llenar todos los campos';
    }

  }
  driver(){
    const spanElement: HTMLElement | null = document.getElementById('error')!;
    if(this.conceptd != '' && this.foliod!=''){
       
    } else {
      spanElement.textContent = 'es necesario llenar todos los campos';
    }
  }
}
