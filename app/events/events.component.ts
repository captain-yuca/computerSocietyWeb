import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Event } from '../shared/event';
import { EventRow} from '../shared/eventRow'
import { EventService } from '../shared/event.service';
@Component({
    selector: 'events',
    providers: [EventService],
    templateUrl: 'app/events/events.component.html',
    styleUrls: ['css/main.css']
})
export class EventsComponent implements OnInit {
    events: Event[];
    eventRows: EventRow[];
    constructor(
        private router: Router,
        private eventService: EventService) { }

    getEvents(): void {
        this.eventService.getEvents().then(events => {
            this.events = events;
            this.eventRows= new Array<EventRow>();
            this.eventRows.push(new EventRow);
            this.eventRows.push(new EventRow);
            this.eventRows.push(new EventRow);
            this.eventRows.push(new EventRow);

            var eventRowCounter = 0;
            var myEventsCounter = 0;
            var moveCounter = 1;
            console.log(this.eventRows[0]);
            this.eventRows[0].myEvents = new Array<Event>();

            for(var eventCounter = 0; eventCounter < this.events.length; eventCounter++){
                this.eventRows[eventRowCounter].myEvents.push(this.events[eventCounter]);
                myEventsCounter++;
                if(moveCounter%3==0){
                    eventRowCounter++;
                    this.eventRows[eventRowCounter].myEvents = new Array<Event>();
                    myEventsCounter=0;
                }
                moveCounter++;
            }
        });

    }




    ngOnInit(): void {
        this.getEvents();
    }

    // onSelect(hero: Hero): void {
    //   this.selectedHero = hero;
    // }

    // gotoDetail(): void {
    //   this.router.navigate(['/detail', this.selectedHero.id]);
    // }
}
