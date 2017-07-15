import { Component } from '@angular/core'
import { ToastrService } from './common/toastr.service'

@Component({
    selector: 'events-app',
    providers: [ToastrService],
    template: `
        <nav-bar></nav-bar>
        <events-list></events-list>
    `
})

export class EventsAppComponent {
    
} 