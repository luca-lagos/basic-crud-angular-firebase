import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Firebase - Firestore class imports
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

//Forms Module
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Environment config import
import { environment } from 'src/environments/environment';

//Popup alerts
import { NgToastModule } from 'ng-angular-popup';

//Components
import { ShowComponent } from './components/show/show.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';

@NgModule({
  declarations: [AppComponent, ShowComponent, CreateComponent, EditComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    NgToastModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
