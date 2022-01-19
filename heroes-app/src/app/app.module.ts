import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

// components
import { AppComponent } from './app.component';
import { AddSuperheroComponent } from './components/add-superhero/add-superhero.component';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';

// Router
import { AppRoutingModule } from './app-routing.module';


// HTTP
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// Forms
import { ReactiveFormsModule } from '@angular/forms';

// Material design
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';

// Interceptor
import { LoaderInterceptor } from './services/loader/loader.interceptor';

// Directivas
import { MayusculasDirective } from './directives/mayusculas.directive';

@NgModule({
  declarations: [
    AddSuperheroComponent,
    AppComponent,
    HeroDetailComponent,
    HeroListComponent,
    HeroModalComponent,
    NavbarComponent,
    MayusculasDirective,
    ProgressbarComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
