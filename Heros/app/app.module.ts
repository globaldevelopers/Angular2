import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ToastrService } from './Common/toastr.service'

import { EventsAppComponent } from './events-app.component'
import { EventsListComponent } from './events/events-list'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavBarComponent } from './nav/navbar.component'
import { EventService } from './events/Shared/event.service'


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [
      AppComponent,
      EventsAppComponent,
      EventsListComponent,
      EventThumbnailComponent,
      NavBarComponent
      
  ],
  providers: [ToastrService, EventService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
