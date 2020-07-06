import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Odd } from '../models/Odd';

@Injectable({
  providedIn: 'root',
})
export class OddService {
  // Base URL for odds API
  oddsUrl: string =
    'https://api.the-odds-api.com/v3/odds/?apiKey=d4b9c07234b85694debadffb2243a266';

  constructor(private http: HttpClient) {}

  getPremierLeagueOdds(): Observable<any> {
    return this.http.get(`${this.oddsUrl}&sport=soccer_epl&region=uk`);
  }

  getFaCupOdds(): Observable<any> {
    return this.http.get(`${this.oddsUrl}&sport=soccer_fa_cup&region=uk`);
  }

  getEflOdds(): Observable<any> {
    return this.http.get(`${this.oddsUrl}&sport=soccer_efl_champ&region=uk`);
  }

  getUefaOdds(): Observable<any> {
    return this.http.get(
      `${this.oddsUrl}&sport=soccer_uefa_europa_league&region=uk`
    );
  }

  getLaLigaOdds(): Observable<any> {
    return this.http.get(
      `${this.oddsUrl}&sport=soccer_spain_la_liga&region=uk`
    );
  }
}
