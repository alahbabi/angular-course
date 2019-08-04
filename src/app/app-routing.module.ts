import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AnimationsComponent } from './animations/animations.component';


const routes: Routes = [
  {path: '', component : HomeComponent},
  {path: 'profile', component : ProfileComponent},
  {path: 'profile/:id', component : ProfileComponent},
  {path: 'animation', component : AnimationsComponent},
  {path: '**', component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
