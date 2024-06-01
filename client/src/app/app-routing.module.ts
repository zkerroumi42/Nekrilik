import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
   {
        path: '',
        component: HomeComponent,
        pathMatch: 'full',
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
      path: 'properties',
      loadChildren: () => import('./properties/properties.module').then((m) => m.PropertiesModule),
  },
    {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
