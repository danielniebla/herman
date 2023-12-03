import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { titleService } from '../title.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    trigger('moveImage', [
      state('left', style({
        transform: 'translateX(0)',
      })),
      state('right', style({
        transform: 'translateX(110%)',
      })),
      transition('left => right', animate('2s')),
      transition('right => left', animate('2s'))
    ])
  ]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private Title:titleService,private http: HttpClient) { }
  user: string = ''; 
  password: string = ''; 
  Users: any[] = [];

  animationState = 'left'; 

  startAnimation() {
    if (this.animationState === 'left') {
      this.animationState = 'right';
    } else {
      this.animationState = 'left';
    }
  }

  login() {
    const spanElement: HTMLElement | null = document.getElementById('error')!;
    const url = `https://apibkend.onrender.com/login/${this.password}/{username}?name=${this.user}`;
    this.http.get(url).subscribe(
      (response: any) => {
        // Manejar la respuesta aquí
        console.log(response); // Ver la respuesta en la consola
        this.Users = response;
    
        if (this.Users && this.Users.length > 0) {
          if (this.Users[0].errno === undefined) {
            if (this.Users[0].Status === "Succes") {
              if (this.Users[0].tipo === "Admin") {
                this.startAnimation();
                setTimeout(() => {
                  this.router.navigate(['/admin']);
                }, 2000);
              } else {
                this.startAnimation();
                setTimeout(() => {
                  this.router.navigate(['/conductor']);
                }, 2000);
              }
            } else {
              spanElement.textContent = 'No se encontraron coincidencias';
            }
          } else {
            spanElement.textContent = 'Error de sistema';
          }
        } else {
          spanElement.textContent = 'Error: No se recibieron datos válidos';
        }
      },
      (error) => {
        spanElement.textContent = 'Error de sistema';
        console.error('Error al obtener los datos:', error);
      }
    );
  }
  ngOnInit(): void {
    const dato = 'login';
    this.Title.setDatoString(dato);
  }
}
