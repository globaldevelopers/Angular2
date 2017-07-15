import { Component, OnInit } from '@angular/core'
import { EventService } from "./Shared/event.service"
import { ToastrService } from '../common/toastr.service'

@Component({
    selector: 'events-list',
    template: `
        <div>
            <h1>Upcoming Angular 2 Events</h1>
            <hr/>
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail (eventClick)="handleEventClicked($event)"
                 [event]="event"></event-thumbnail>
            </div>
        </div>
`
})

export class EventsListComponent implements OnInit {

    events: any[]; //any array

    //ctor injects and assigns service to private variable eventService
    constructor(private eventService: EventService, private toastr: ToastrService) {
        
    }

    ngOnInit() {
        this.events = this.eventService.getEvents();
    }

    handleEventClicked(data) {
        this.toastr.success(data);
    } 
}