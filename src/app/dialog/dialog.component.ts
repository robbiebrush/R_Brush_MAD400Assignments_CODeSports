import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  contentList?: any;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any){ 
      this.contentList = data.list;
    }

    addContentToList(title: string, desc: string, creator: string, type: string, tags: string, img: string): void {
      var allTags: string[] = tags.split(",");
      
      if (img == "") {
        var newContent: Content = {id: this.contentList.length, title: title, description: desc, creator: creator, type: type, tags: allTags};
      } else {
        var newContent: Content = {id: this.contentList.length, title: title, description: desc, creator: creator, type: type, tags: allTags, imgURL: img};
      }
      
      
      this.dialogRef.close(newContent);
    }

    onCancel(): void {
      this.dialogRef.close();
    }

  ngOnInit(): void {
  }

}
