import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class titleService {
  private datoStringSource = new BehaviorSubject<string>('');

  datoString$ = this.datoStringSource.asObservable();

  setDatoString(dato: string) {
    this.datoStringSource.next(dato);
  }

  getDatoString() {
    return this.datoStringSource.value;
  }
}
