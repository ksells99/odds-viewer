import { Component, OnInit } from '@angular/core';
import { OddService } from '../../services/odd.service';
import { Odd } from '../../models/Odd';

@Component({
  selector: 'app-premier',
  templateUrl: './premier.component.html',
  styleUrls: ['./premier.component.css'],
})
export class PremierComponent implements OnInit {
  odds: Odd[];
  searchTerm: string = '';
  filteredOdds: any[];
  loading: boolean = true;

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
      this.odds = odds.data;

      this.loading = false;
    });
  }

  refreshOdds() {
    this.loading = true;
    this.searchTerm = '';
    this.filteredOdds = null;

    this.odds = [];
    this.getOdds();
  }

  searchOdds() {
    // If search is cleared, return all odds
    if (this.searchTerm == '') {
      this.filteredOdds = null;
      return this.odds;
    } else {
      // Filter based on home team - set filteredOdds array to matching games

      this.filteredOdds = this.odds.filter((odd) =>
        odd.home_team.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }
}
