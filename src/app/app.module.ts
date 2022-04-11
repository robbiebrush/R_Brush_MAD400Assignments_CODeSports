import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentTypePipe } from './content-list/content-list.pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from './Services/in-memory-data.service';
import { ModifyContentComponentComponent } from './modify-content-component/modify-content-component.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    ContentTypePipe,
    HoverAffectDirective,
    ModifyContentComponentComponent,
    DialogComponent,
    ContentDetailComponent,
    NotFoundComponent
  ],
  imports: [
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    BrowserModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,
      {
      dataEncapsulation: false,
      delay: 1000,
      }),
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
