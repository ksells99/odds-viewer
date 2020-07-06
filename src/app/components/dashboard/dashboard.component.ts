import { Component, OnInit } from '@angular/core';
import { OddService } from '../../services/odd.service';
import { Odd } from '../../models/Odd';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  premierLeagueOdds: Odd[];
  premierLeagueLoading: boolean = true;

  faCupOdds: Odd[];
  faCupLoading: boolean = true;

  eflOdds: Odd[];
  eflLoading: boolean = true;

  uefaOdds: Odd[];
  uefaLoading: boolean = true;

  laLigaOdds: Odd[];
  laLigaLoading: boolean = true;

  // Inject oddservice as dependency
  constructor(private oddService: OddService) {}

  // On component load...
  ngOnInit() {
    // Run getOdds function below to load odds on page load
    this.getOdds();
  }

  getOdds() {
    // Get premierleague odds from service - subscribe to observable - returns odds list
    this.oddService.getPremierLeagueOdds().subscribe((odds) => {
      this.premierLeagueOdds = odds.data;
      this.premierLeagueLoading = false;
    });

    this.oddService.getFaCupOdds().subscribe((odds) => {
      this.faCupOdds = odds.data;
      this.faCupLoading = false;
    });

    this.oddService.getEflOdds().subscribe((odds) => {
      this.eflOdds = odds.data;
      this.eflLoading = false;
    });

    this.oddService.getUefaOdds().subscribe((odds) => {
      this.uefaOdds = odds.data;
      this.uefaLoading = false;
    });

    this.oddService.getLaLigaOdds().subscribe((odds) => {
      this.laLigaOdds = odds.data;
      this.laLigaLoading = false;
    });
  }
}
