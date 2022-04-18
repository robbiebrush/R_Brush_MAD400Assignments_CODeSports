import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
  providedIn: 'root'
})
export class LogUpdateService {

  constructor(private updates: SwUpdate) { }

  public init(){
    this.updates.versionUpdates.subscribe(event => {
      switch (event.type) {
        case 'VERSION_DETECTED':
          console.log(`Downloading new app version:
          ${event.version.hash}`);
          break;
        case 'VERSION_READY':
          let snackBarRef = snackBar.open('Current app version: ' + event.currentVersion.hash + 
          'New app version ready for use: ' + event.latestVersion.hash, 'Update');
          
          this.updates.activateUpdate().then(() =>
            document.location.reload());
          break;
    } });
  }
}
