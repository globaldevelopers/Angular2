"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const events_list_1 = require("./events/events-list");
const event_details_component_1 = require("./events/event-details/event-details.component");
exports.appRoutes = [
    { path: 'events', component: events_list_1.EventsListComponent },
    { path: 'events/:id', component: event_details_component_1.EventDetailsComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
];
//# sourceMappingURL=routes.js.map