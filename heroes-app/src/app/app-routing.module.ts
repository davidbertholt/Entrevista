import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';

const routes: Routes = [
  { path: 'list', component: HeroListComponent, pathMatch: 'full'},
  { path: 'detail/:id', component: HeroDetailComponent, pathMatch: 'full'},
  { path: '**', component: HeroListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
