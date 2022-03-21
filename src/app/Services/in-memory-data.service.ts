import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/contentDB';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const content: Content[] = ContentList;
    return {content};
  }

  genId(content: Content[]): number {
    return content.length > 0 ? Math.max(...ContentList.map(c => c.id ?? 0)) + 1 : 2000;
  }
}
