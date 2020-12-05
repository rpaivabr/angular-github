import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TesteComponent } from './teste/teste.component';
import { Teste2Component } from './teste2/teste2.component';

const routes: Routes = [
  { path: '', redirectTo: '/teste', pathMatch: 'full' },
  { path: 'teste', component: TesteComponent },
  { path: 'teste2', component: Teste2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
