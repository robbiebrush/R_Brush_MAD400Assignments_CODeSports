import { Component, Input, OnInit } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { CODInfoService } from './Services/codinfo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'learning-angular';
  @Input() spContentList: Content[];

  constructor(private codInfoService: CODInfoService) {
    this.spContentList = [];
   }

  ngOnInit(): void {
    this.codInfoService.getSpecificContentObs().subscribe(spContent => {
      this.spContentList[0] = spContent;
    });
  }
}
