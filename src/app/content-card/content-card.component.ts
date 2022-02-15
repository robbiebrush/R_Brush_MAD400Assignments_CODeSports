import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
@Input() content?: Content;
defaultImg: string = "https://piunikaweb.com/wp-content/uploads/2021/07/Call-of-Duty-COD-FI-new.png";
  constructor() { 
    
  }

  outputContent(): void {
    console.log("ID: ", this.content?.id);
    console.log("Title: ", this.content?.title);
  }

  ngOnInit(): void {
  }
}
