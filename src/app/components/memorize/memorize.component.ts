import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-memorize',
  templateUrl: './memorize.component.html'
})
export class MemorizeComponent implements OnInit {
  
  public card: any = {
    type: false,
    front: "",
    back: "",
    known: false
  };

  ngOnInit(): void {
    this.findById(5664248772427776);
  }

  public constructor(private http: Http) {
  }

  findById(id: number): void {
    this.http.get(`${environment.apiUrl}/api/user/cards/${id}`)
    .map((response: Response) => response.json())
    .subscribe(
      (success: any) => {
        this.card = success;
      },
      (error: any) => {
      }
    );
  }
}
