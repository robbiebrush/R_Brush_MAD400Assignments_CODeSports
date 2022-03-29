import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Content } from '../helper-files/content-interface';
import { CODInfoService } from '../Services/codinfo.service';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {
  @Input() contentList?: Content[];
  newContent?: Content;
  constructor(private codInfoService: CODInfoService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      list: this.contentList
    }

    const dialogRef = this.dialog.open(DialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
      data => this.codInfoService.addContent(data).subscribe(newServerContent => this.contentList!.push(newServerContent))
    );
    console.log(this.contentList);
  }
}
