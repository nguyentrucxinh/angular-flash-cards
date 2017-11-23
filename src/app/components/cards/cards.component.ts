import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html'
})
export class CardsComponent implements OnInit {

  public cards: any[] = [];

  ngOnInit(): void {
    this.findAll();
  }

  public constructor(private http: Http) {
  }

  findAll(): void {
    this.http.get(`${environment.apiUrl}/api/user/cards`)
    .map((response: Response) => response.json())
    .subscribe(
      (success: any) => {
        this.cards = success;
      },
      (error: any) => {
      }
    );
  }
}
