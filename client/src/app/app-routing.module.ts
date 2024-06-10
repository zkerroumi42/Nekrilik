import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { StatistiquesComponent } from './statistiques/statistiques.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
   {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
    },

    {
        path: 'users',
        loadChildren: () => import('./users/users.module').then((m) => m.UsersModule),
    },
    {
        path: 'properties',
        loadChildren: () => import('./properties/properties.module').then((m) => m.PropertiesModule),
    },
    {
      path: 'bookings',
      loadChildren: () => import('./bookings/bookings.module').then((m) => m.BookingsModule),
  },
  {
    path: 'statistiques',component:StatistiquesComponent
},
{
    path: 'profile',component:ProfileComponent
},
    {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
