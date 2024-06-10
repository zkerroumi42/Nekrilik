import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListPropertiesComponent } from './list-properties/list-properties.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { PropertyComponent } from './property/property.component';
import { CreatePropertyComponent } from './create-property/create-property.component';
import { UpdatePropertyComponent } from './update-property/update-property.component';
const routes: Routes = [
  {
    path: '',
    children: [

      { path: 'create', component: CreatePropertyComponent },
      { path: 'update/:id', component: UpdatePropertyComponent },
      { path: '', component: ListPropertiesComponent },
      { path: ':id', component: PropertyComponent },

    ],
  },
];


@NgModule({
  declarations: [ListPropertiesComponent,PropertyComponent, CreatePropertyComponent, UpdatePropertyComponent,],
  imports: [
    CommonModule,
    
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule ,
        RouterModule.forChild(routes),
    
        
  ]
})
export class PropertiesModule { }
