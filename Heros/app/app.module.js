"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const app_component_1 = require("./app.component");
const toastr_service_1 = require("./Common/toastr.service");
const events_app_component_1 = require("./events-app.component");
const events_list_1 = require("./events/events-list");
const event_thumbnail_component_1 = require("./events/event-thumbnail.component");
const navbar_component_1 = require("./nav/navbar.component");
const event_service_1 = require("./events/Shared/event.service");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
        declarations: [
            app_component_1.AppComponent,
            events_app_component_1.EventsAppComponent,
            events_list_1.EventsListComponent,
            event_thumbnail_component_1.EventThumbnailComponent,
            navbar_component_1.NavBarComponent
        ],
        providers: [toastr_service_1.ToastrService, event_service_1.EventService],
        bootstrap: [events_app_component_1.EventsAppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map