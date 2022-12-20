import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CiclosComponent } from './componentes/ciclos/ciclos.component';
import { UnidadesDeNegocioComponent } from './componentes/unidades-de-negocio/unidades-de-negocio.component';
import { FrenteEstrategicasComponent } from './componentes/frente-estrategicas/frente-estrategicas.component';
import { DetalhamentoFrenteEstrategicasComponent } from './componentes/detalhamento-frente-estrategicas/detalhamento-frente-estrategicas.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    HeaderComponent,
    FooterComponent,
    CiclosComponent,
    UnidadesDeNegocioComponent,
    FrenteEstrategicasComponent,
    DetalhamentoFrenteEstrategicasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
