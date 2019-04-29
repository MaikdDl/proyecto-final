import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Card } from 'src/app/shared/shared.models';



@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(private http: HttpClient) { }

  getPacks(): Observable<Card[]> {
    return this.http.get<Card[]>(`${environment.apiBaseUrl}/products`);
  }
}