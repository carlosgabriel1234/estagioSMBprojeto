import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiclosComponent } from './componentes/ciclos/ciclos.component';
import { UnidadesDeNegocioComponent } from './componentes/unidades-de-negocio/unidades-de-negocio.component';
import { FrenteEstrategicasComponent } from './componentes/frente-estrategicas/frente-estrategicas.component';
import { DetalhamentoFrenteEstrategicasComponent } from './componentes/detalhamento-frente-estrategicas/detalhamento-frente-estrategicas.component';

const routes: Routes = [
  {
    path: 'ciclos',
    component: CiclosComponent
  },
  {
    path: 'unidadesDeNegocio',
    component: UnidadesDeNegocioComponent
  },
  {
    path: 'frenteEstrategica',
    component: FrenteEstrategicasComponent
  },
  {
    path: 'detalhamentoFrenteEstrategica',
    component: DetalhamentoFrenteEstrategicasComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
