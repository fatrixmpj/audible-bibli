import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewAudiobookComponent } from './new-audiobook/new-audiobook.component';
import { HomeResolver } from './shared/home.resolver';

const routes: Routes = [
  { path: 'home', component: HomeComponent, resolve: { home: HomeResolver} },
  { path: 'new', component: NewAudiobookComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
