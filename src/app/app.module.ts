import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { PlanetsService } from './planets.service';
import { ToDoService } from './to-do.service';
import { PlanetsComponent } from './planets/planets.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatButtonModule, MatMenuModule, MatDatepickerModule } from '@angular/material';
import { MatNativeDateModule, MatIconModule, MatCardModule } from '@angular/material';
import { MatSidenavModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { MatTooltipModule, MatToolbarModule } from '@angular/material';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    ToDoListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatPaginatorModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatToolbarModule,
    AppRoutingModule,
    MatGridListModule

  ],
  providers: [
    HttpClientModule,
    PlanetsService,
    ToDoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }