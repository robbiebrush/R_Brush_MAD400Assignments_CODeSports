import { Injectable } from '@angular/core';
import {SwUpdate} from "@angular/service-worker";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {
  private snackBar: MatSnackBar | undefined;

  constructor(private updates: SwUpdate) { }

  public init(){
    this.updates.versionUpdates.subscribe(event => {
      switch (event.type) {
        case 'VERSION_DETECTED':
          console.log(`Downloading new app version:
          ${event.version.hash}`);
          break;
        case 'VERSION_READY':

          // @ts-ignore
          let snackBarRef = this.snackBar.open('Update is ready', 'Update');

          snackBarRef.afterDismissed().subscribe(() => {
            console.log('The snackbar was dismissed');
          });

          snackBarRef.onAction().subscribe(() => {
            console.log('Updating!');
            this.updates.activateUpdate().then(() =>
              document.location.reload());
          });
          break;
      } });
  }
}
