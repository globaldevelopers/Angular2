import { Component, Input, Output, EventEmitter } from '@angular/core'

@
Component({
    selector: 'event-thumbnail',
    templateUrl: 'app/events/events-list.component.html',
    styles: [`

        .green {color: red !important;}
        .blue {color: blue !important;}
        .bold { font-weight: bold; }
        `
    ]
})

export class EventThumbnailComponent {
    @Input() event: any

    @Output() eventClick = new EventEmitter()

    handleClickMe() {
        this.eventClick.emit(this.event.name)
    }

    getStartTimeClass() {
        if (this.event && this.event.time === '8:00 am') {
            return ['green', 'bold']
        } else {
            return ['blue']
        }
        
        


    }
}