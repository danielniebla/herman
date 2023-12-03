import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ClarityModule } from "@clr/angular";
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { ConductorModule } from './conductor/conductor.module';
import { AdminModule } from './admin/admin.module';
import { DirectivasModule } from './directivas/directivas.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { titleService } from './title.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ClarityModule,
    FormsModule,
    ConductorModule,
    AdminModule,
    DirectivasModule,
    HttpClientModule,

  ],
  exports:[
  ],
  providers: [titleService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
