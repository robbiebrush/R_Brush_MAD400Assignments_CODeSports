import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  content1: Content;
  content2: Content;
  content3: Content;
  content4: Content;
  content5: Content;
  content6: Content;
  contentArray: Array<Content> = [];
  array: Array<Number> = [];

  constructor() { 
    this.content1 = {
      id: 1,
      title: "Content1",
      description: "Content1 is awesome.",
      creator: "Robbie Brush",
      imgURL: "http://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/books.png",
      type: "Article",
      tags: ["#words", "#reading","#woohoo"]
    }

    this.content2 = {
      id: 2,
      title: "Content2",
      description: "Content2 is awesome.",
      creator: "Robbie Brush",
      imgURL: "https://www.dreamhost.com/blog/wp-content/uploads/2019/01/Blog-experts-opt-750x498.jpg",
      type: "Blog",
      tags: ["#blogs", "#information","#woohoo"]
    }

    this.content3 = {
      id: 3,
      title: "Content3",
      description: "Content3 is awesome.",
      creator: "Robbie Brush",
      imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/447px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg",
      type: "Article",
      tags: ["#knowledge", "#education","#woohoo"]
    }

    this.content4 = {
      id: 4,
      title: "Content4",
      description: "Content4 is awesome.",
      creator: "Robbie Brush",
      imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/447px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg",
      type: "Article",
      tags: ["#knowledge", "#education","#woohoo"]
    }

    this.content5 = {
      id: 5,
      title: "Content5",
      description: "Content5 is awesome.",
      creator: "Robbie Brush",
      imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/447px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg",
      type: "Article",
      tags: ["#knowledge", "#education","#woohoo"]
    }

    this.content6 = {
      id: 6,
      title: "Content6",
      description: "Content6 is awesome.",
      creator: "Robbie Brush",
      imgURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg/447px-Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg",
      type: "Article",
      tags: ["#knowledge", "#education","#woohoo"]
    }
    
    this.array = [1, 2, 3, 4, 5 ,6]
  }

  ngOnInit(): void {
    this.contentArray = [this.content1, this.content2, this.content3, this.content4, this.content5, this.content6];
  }

  outputContent(index: number) {
    console.log(this.contentArray[index].id)
    console.log(this.contentArray[index].title)
  }

}
