﻿import { Component } from '@angular/core'
import { EventService } from '../Shared/event.service'
import { ActivatedRoute } from '@angular/router'

@Component({
    templateUrl: '/app/events/event-details/event-details.component.html',
    styles: [`
                .event-image: { height:100px; }
`]
})

export class EventDetailsComponent {

    event:any;

    constructor (private eventService:EventService, private route:ActivatedRoute){}

    ngOnInit() {
        this.event = this.eventService.getEvent(+this.route.snapshot.params['id']);
    }
}