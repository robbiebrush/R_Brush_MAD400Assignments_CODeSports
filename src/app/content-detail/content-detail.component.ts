import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Content } from '../helper-files/content-interface';
import { CODInfoService } from '../Services/codinfo.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent implements OnInit {
  contentList: Content[];
  id: number;
  content?: Content;
  defaultImg: string = "https://piunikaweb.com/wp-content/uploads/2021/07/Call-of-Duty-COD-FI-new.png";
  
  constructor(private route: ActivatedRoute, private codInfoService: CODInfoService) { 
    this.contentList = [];
    this.id = 0;
  }

  ngOnInit(): void {
    this.codInfoService.getContent().subscribe(contentlist => {
      this.contentList = contentlist;
    });

    this.route.paramMap.subscribe(params => {
      if (Number(params.get('id')) == null) {
        this.id = 100;
      } else {
        this.id = Number(params.get('id'));
        this.codInfoService.getSpecificContentObs(this.id).subscribe((c) => {
          this.content = c;
        })
      }
    });
  }

  outputContent(): void {
    console.log("ID: ", this.content?.id);
    console.log("Title: ", this.content?.title);
  }
}
