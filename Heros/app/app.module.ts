import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { ToastrService } from './Common/toastr.service'

import { EventsAppComponent } from './events-app.component'
import { EventsListComponent } from './events/events-list'
import { EventThumbnailComponent } from './events/event-thumbnail.component'
import { NavBarComponent } from './nav/navbar.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { EventService } from './events/Shared/event.service'
import { appRoutes } from './routes'

@NgModule({
    imports: [BrowserModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
  declarations: [
      AppComponent,
      EventsAppComponent,
      EventsListComponent,
      EventThumbnailComponent,
      NavBarComponent,
      EventDetailsComponent
      
  ],
  providers: [ToastrService, EventService],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
