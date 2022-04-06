import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonRoutingModule } from './person-routing.module';
import { PersonsListComponent } from './persons-list/persons-list.component';
import { PersonInfoComponent } from './person-info/person-info.component';
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MaterialModule} from "../material/material/material.module";


@NgModule({
  declarations: [
    PersonsListComponent,
    PersonInfoComponent
  ],
  imports: [
    CommonModule,
    PersonRoutingModule,
    FormsModule,
    MaterialModule
  ]
})
export class PersonModule { }
