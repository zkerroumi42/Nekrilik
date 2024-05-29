import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListPropertiesComponent } from './list-properties/list-properties.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { PropertyComponent } from './property/property.component';

const routes: Routes = [
  {
    path: '',
    children: [


      { path: 'list', component: ListPropertiesComponent },
      { path: ':id', component: PropertyComponent },

    ],
  },
];


@NgModule({
  declarations: [ListPropertiesComponent,PropertyComponent],
  imports: [
    CommonModule,
    
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
        RouterModule.forChild(routes),
    
        
  ]
})
export class PropertiesModule { }
