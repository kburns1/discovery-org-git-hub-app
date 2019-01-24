import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UserRepositoriesComponent } from './user-repositories/user-repositories.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import * as MATERIAL from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
    UserCardComponent,
    UserRepositoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MATERIAL.MatButtonModule,
    MATERIAL.MatToolbarModule,
    MATERIAL.MatCardModule
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MATERIAL.MatButtonModule,
    MATERIAL.MatToolbarModule,
    MATERIAL.MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
