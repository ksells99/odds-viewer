import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PremierComponent } from './components/premier/premier.component';
import { FaCupComponent } from './components/fa-cup/fa-cup.component';
import { EflComponent } from './components/efl/efl.component';
import { UefaComponent } from './components/uefa/uefa.component';
import { LaLigaComponent } from './components/la-liga/la-liga.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'premier-league', component: PremierComponent },
  { path: 'fa-cup', component: FaCupComponent },
  { path: 'efl-championship', component: EflComponent },
  { path: 'uefa-europa', component: UefaComponent },
  { path: 'la-liga', component: LaLigaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
