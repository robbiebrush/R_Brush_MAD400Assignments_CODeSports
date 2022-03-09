import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/contentDB';

@Injectable({
  providedIn: 'root'
})
export class CODInfoService {

  constructor() { }

  getContent(): Content[] {
    return ContentList;
  }

  getContentObs(): Observable<Content[]> {
    return of(ContentList);
  }

  getSpecificContentObs(): Observable<Content> {
    return of(ContentList[0]);
  }
}
