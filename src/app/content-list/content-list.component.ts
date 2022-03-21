import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CODInfoService } from '../Services/codinfo.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})

export class ContentListComponent implements OnInit {
  contentList: Content[];
  titleFound: string = "";
  selector: string = "";
  selected: string = "";

  constructor(private codInfoService: CODInfoService) { 
    this.contentList = [];
  }

  ngOnInit(): void {
    this.codInfoService.getContent().subscribe(contentlist => {
      this.contentList = contentlist;
    });
  }



  titleFind(searchTitle: string) {
    var output: string = "";
    for (let content of this.contentList) {
        if (content.title == searchTitle) {
            output = "Content exists!";
            this.selector = "exists"
            break;
        } else {
            output = "Content doesn't exist!"
            this.selector = "notExists"
        }
      }
      this.titleFound = output;
  }
}

