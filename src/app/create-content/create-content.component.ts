import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {

  @Output() newContentEvent = new EventEmitter<Content>();
  newContent!: Content;

  constructor() {}

  ngOnInit(): void {
    
  }

  addContent(id: string, title: string, desc: string, creator: string, url: string, type: string, tag1: string, tag2: string, tag3: string): void {
    
    if (id == "" || title == "" || desc == "" || creator == "") {
      
    } else {
      if (tag1 == "") {
        tag1 = "None";
        tag2 = "None";
        tag3 = "None";
      } else if(tag2 == "") {
        tag2 = "None";
        tag3 = "None";
      } else if(tag3 == "") {
        tag3 = "None";
      }
      let tags: string[] = [tag1, tag2, tag3];
      
      if (url == "") {
        if(type == "") {
          this.newContent = {
            id: Number(id),
            title: title,
            description: desc,
            creator: creator,
            tags: tags
          }
        } else {
          this.newContent = {
            id: Number(id),
            title: title,
            description: desc,
            creator: creator,
            type: type,
            tags: tags
          }
      }
      } else {
        if(type == "") {
          this.newContent = {
            id: Number(id),
            title: title,
            description: desc,
            creator: creator,
            imgURL: url,
            tags: tags
          }
        } else {
          this.newContent = {
            id: Number(id),
            title: title,
            description: desc,
            creator: creator,
            imgURL: url,
            type: type,
            tags: tags
          }
      }
    }
      this.newContentEvent.emit(this.newContent);
    }
  }
}
