import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  contentArray: Array<Content> = [];
  titleFound: string = "";
  selector: string = "";
  selected: string = "";

  constructor() { 
    this.contentArray = [{
      id: 0,
      title: "Content1",
      description: "Content1 is awesome.",
      creator: "Robbie Brush",
      imgURL: "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/books.png",
      type: "Article",
      tags: ["#words", "#reading","#woohoo"]
    }, {
      id: 1,
      title: "Content2",
      description: "Content2 is awesome.",
      creator: "Robbie Brush",
      type: "Blog",
      tags: ["#blogs", "#information","#woohoo"]
    },{
      id: 2,
      title: "Content3",
      description: "Content3 is awesome.",
      creator: "Robbie Brush",
      type: "Article",
      tags: ["#knowledge", "#education","#woohoo"]
    }, {
      id: 3,
      title: "Content4",
      description: "Content4 is awesome.",
      creator: "Robbie Brush",
      imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/447px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg",
      tags: ["#knowledge", "#education","#woohoo"]
    }, {
      id: 4,
      title: "Content5",
      description: "Content5 is awesome.",
      creator: "Robbie Brush",
      imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/447px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg",
      tags: ["#knowledge", "#education","#woohoo"]
    }, {
      id: 5,
      title: "Content6",
      description: "Content6 is awesome.",
      creator: "Robbie Brush",
      imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/447px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg",
      tags: ["#knowledge", "#education","#woohoo"]
    }, {
      id: 6,
      title: "Content7",
      description: "Content7 is awesome.",
      creator: "Robbie Brush",
      imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/447px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg",
      type: "Article",
      tags: ["#knowledge7", "#education7","#woohoo7"]
    }];
  }

  ngOnInit(): void {
    
  }

  titleFind(searchTitle: string) {
    var output: string = "";
    for (let content of this.contentArray) {
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

  addContentToList(newContentFromChild: Content) {
    this.contentArray.push(newContentFromChild);
    this.contentArray = Object.assign([], this.contentArray);
    this.contentArray = [...this.contentArray];
  }
}
