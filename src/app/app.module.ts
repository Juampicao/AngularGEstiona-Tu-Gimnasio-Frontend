import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Componentes Internos
import { DashboardComponent } from './shared/components/components/dashboard/dashboard.component';
import { FormSuscriptorComponent } from './shared/components/components/dashboard/suscriptores/form-suscriptor/form-suscriptor.component';
import { SuscriptorslistComponent } from './shared/components/components/dashboard/suscriptores/suscriptorslist/suscriptorslist.component';
import { NavbarComponent } from './shared/components/components/dashboard/navbar/navbar.component';

// Angular Material
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSliderModule } from '@angular/material/slider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { DialogComponent } from './shared/components/components/dialog/dialog.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule, MAT_RANGE_DATE_SELECTION_MODEL_PROVIDER} from '@angular/material/datepicker';


@NgModule({
  declarations: [
    AppComponent,
    SuscriptorslistComponent,
    FormSuscriptorComponent,
    DashboardComponent,
    NavbarComponent,
    DialogComponent,
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule
  ],

  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [FormSuscriptorComponent]
})
export class AppModule { }
