import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { TablePaginationComponent } from './table-pegination/table-pagination.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { NgxAbstractControlAsModule } from 'ngx-abstract-control-as';
import { OwnerFormComponent } from './shared/owner-form/owner-form.component';
import { EditOwnerComponent } from './shared/edit-owner/edit-owner.component';
import { ViewOwnerComponent } from './shared/view-owner/view-owner.component';

@NgModule({
  declarations: [
    AppComponent,
    TablePaginationComponent,
    OwnerFormComponent,
    EditOwnerComponent,
    ViewOwnerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatButtonModule,
    MatInputModule,
    AppRoutingModule,
    HttpClientModule,
    NgxAbstractControlAsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

