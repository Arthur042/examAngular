import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { HomeComponent } from './components/home/home.component';
import { MarqueListComponent } from './components/marque-list/marque-list.component';
import { MarqueComponent } from './components/marque/marque.component';
import { TypeListComponent } from './components/type-list/type-list.component';
import { TypeComponent } from './components/type/type.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'type', component: TypeComponent},
  {path: 'type/:type', component: TypeListComponent},
  {path: 'marque', component: MarqueComponent},
  {path: 'marque/:marque', component: MarqueListComponent},
  {path: ':id', component: DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
