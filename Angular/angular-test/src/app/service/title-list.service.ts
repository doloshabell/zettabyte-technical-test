import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { TitleList } from '../interface/title-list';

@Injectable({
  providedIn: 'root',
})
export class TitleListService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getTitleList(): Observable<TitleList[]> {
    return this.http.get<TitleList[]>(`${this.apiUrl}/titles`).pipe(
      tap((titles) => console.log(titles)),
      map((titles) =>
        titles.map((title) => ({
          ...title,
          titleShortName: title.short_name,
          titleLongName: title.long_name,
          titleLevel: title.rncp_level,
          titleCertifierName: title.certifier?.short_name,
          titleIsPublished: title.is_published,
        }))
      )
    );
  }
}
