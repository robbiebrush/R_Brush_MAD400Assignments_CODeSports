import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CODInfoService } from '../Services/codinfo.service';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {
  @Input() contentList?: Content[];

  constructor(private codInfoService: CODInfoService) { }

  ngOnInit(): void {
  }

  addContentToList(title: string, desc: string, creator: string, type: string, tags: string, img: string): void {
    var allTags: string[] = tags.split(",");
    
    if (img == "") {
      var newContent: Content = {title: title, description: desc, creator: creator, type: type, tags: allTags};
    } else {
      var newContent: Content = {title: title, description: desc, creator: creator, type: type, tags: allTags, imgURL: img};
    }
    console.log(this.contentList);
    this.codInfoService.addContent(newContent).subscribe(newServerContent => this.contentList!.push(newServerContent));
  }
}
