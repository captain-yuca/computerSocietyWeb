"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var eventRow_1 = require('../shared/eventRow');
var event_service_1 = require('../shared/event.service');
var EventsComponent = (function () {
    function EventsComponent(router, eventService) {
        this.router = router;
        this.eventService = eventService;
    }
    EventsComponent.prototype.getEvents = function () {
        var _this = this;
        this.eventService.getEvents().then(function (events) {
            _this.events = events;
            _this.eventRows = new Array();
            _this.eventRows.push(new eventRow_1.EventRow);
            _this.eventRows.push(new eventRow_1.EventRow);
            _this.eventRows.push(new eventRow_1.EventRow);
            _this.eventRows.push(new eventRow_1.EventRow);
            var eventRowCounter = 0;
            var myEventsCounter = 0;
            var moveCounter = 1;
            console.log(_this.eventRows[0]);
            _this.eventRows[0].myEvents = new Array();
            for (var eventCounter = 0; eventCounter < _this.events.length; eventCounter++) {
                _this.eventRows[eventRowCounter].myEvents.push(_this.events[eventCounter]);
                myEventsCounter++;
                if (moveCounter % 3 == 0) {
                    eventRowCounter++;
                    _this.eventRows[eventRowCounter].myEvents = new Array();
                    myEventsCounter = 0;
                }
                moveCounter++;
            }
        });
    };
    EventsComponent.prototype.ngOnInit = function () {
        this.getEvents();
    };
    EventsComponent = __decorate([
        core_1.Component({
            selector: 'events',
            providers: [event_service_1.EventService],
            templateUrl: 'app/events/events.component.html',
            styleUrls: ['css/main.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, event_service_1.EventService])
    ], EventsComponent);
    return EventsComponent;
}());
exports.EventsComponent = EventsComponent;
//# sourceMappingURL=events.component.js.map