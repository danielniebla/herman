import { Component, OnInit } from '@angular/core';
import { titleService } from '../title.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
  title?:string;
  constructor(private Title : titleService){}

  ngOnInit(): void {
    this.Title.datoString$.subscribe((dato: string) => {
      this.title = dato;
    });
  }
}
