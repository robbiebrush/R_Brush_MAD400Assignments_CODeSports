import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/contentDB';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CODInfoService {

  constructor(private http: HttpClient) { }

  getContent(): Observable<Content[]> {
   return this.http.get<Content[]>("api/content");
  }

  getContentObs(): Observable<Content[]> {
    return of(ContentList);
  }

  getSpecificContentObs(index: number): Observable<Content> {
    return of(ContentList[index]);
  }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':
    'application/json' })
    };

    addContent(newContentItem: Content): Observable<Content>{
      return this.http.post<Content>("api/content",
      newContentItem, this.httpOptions);
    }
}
