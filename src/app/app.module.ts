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

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    ContentTypePipe,
    HoverAffectDirective,
    ModifyContentComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,
      {
      dataEncapsulation: false,
      delay: 1000,
      })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
