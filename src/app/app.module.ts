import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PremierComponent } from './components/premier/premier.component';
import { OddService } from './services/odd.service';
import { FaCupComponent } from './components/fa-cup/fa-cup.component';
import { EflComponent } from './components/efl/efl.component';
import { UefaComponent } from './components/uefa/uefa.component';
import { LaLigaComponent } from './components/la-liga/la-liga.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    PremierComponent,
    FaCupComponent,
    EflComponent,
    UefaComponent,
    LaLigaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [OddService],
  bootstrap: [AppComponent],
})
export class AppModule {}
