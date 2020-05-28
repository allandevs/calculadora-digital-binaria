import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { CalculadoraDigitalComponent } from './calculadora-digital/calculadora-digital.component';
import { CalculadoraBinariaComponent } from './calculadora-binaria/calculadora-binaria.component';
import { ApresentacaoComponent } from './apresentacao/apresentacao.component';
import { MenuComponent } from './menu/menu.component';
const appRoutes: Routes = [
  { path: 'digital', component: CalculadoraDigitalComponent },
  { path: 'binaria',      component: CalculadoraBinariaComponent },
  { path: 'apresentacao',      component: ApresentacaoComponent },
  { path: '',
    redirectTo: '/apresentacao',
    pathMatch: 'full'
  },
];
@NgModule({
  declarations: [
    AppComponent,
    CalculadoraDigitalComponent,
    CalculadoraBinariaComponent,
    ApresentacaoComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AlertModule.forRoot(),
    RouterModule.forChild(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
