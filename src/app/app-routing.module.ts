
import { MoviedetilsComponent } from './moviedetils/moviedetils.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginComponent } from './login/login.component';
import { NotfondComponent } from './notfond/notfond.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworksComponent } from './networks/networks.component';
import { PeopleComponent } from './people/people.component';
import { TvshowComponent } from './tvshow/tvshow.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'', redirectTo:"home" ,pathMatch:"full"},
  {path:"home",canActivate:[AuthGuard],component:HomeComponent},
  {path:"about",canActivate:[AuthGuard],component:AboutComponent},
  {path:"movies", canActivate:[AuthGuard],component:MoviesComponent},
  {path:"people", canActivate:[AuthGuard],component:PeopleComponent},
  {path:"tvshow", canActivate:[AuthGuard],component:TvshowComponent},
  {path:"movietetals/:id", canActivate:[AuthGuard],component:MoviedetilsComponent},
  {path:"networks",canActivate:[AuthGuard],component:NetworksComponent},
  {path:"login", component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"logout",component:LogoutComponent},

  {path:"**",component:NotfondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
