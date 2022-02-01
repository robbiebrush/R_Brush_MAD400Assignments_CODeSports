import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  content1: Content;
  content2: Content;
  content3: Content;

  constructor() { 
    this.content1 = {
      id: 1,
      title: "Content1",
      description: "Content1 is awesome.",
      creator: "Robbie Brush",
      imgURL: "https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=590&h=800&D80F3D79-4382-49FA-BE4B4D0C62A5C3ED",
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
  }

  ngOnInit(): void {
  }

}
