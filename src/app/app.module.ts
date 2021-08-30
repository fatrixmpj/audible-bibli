import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';


// Sonstiger import
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { HomeResolver } from './shared/home.resolver';
import { BookEffects } from './home/state/book.effects';
import { HttpClientModule } from '@angular/common/http';
import { bookReducer } from './home/state/book.reducer';
import { NewAudiobookComponent } from './new-audiobook/new-audiobook.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    NewAudiobookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatButtonModule,
    StoreModule.forRoot({books: bookReducer}),
    EffectsModule.forRoot([BookEffects]),
    StoreDevtoolsModule.instrument({
      name: 'Audible Bibliothek',
      maxAge: 50,
      logOnly: environment.production
    }),
    HttpClientModule,
    MatTableModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  providers: [
    HomeResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
