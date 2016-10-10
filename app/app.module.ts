import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }   from './app.component';
import { routing } from './app.routing';
import { EventService} from './shared/event.service';
import { EventsComponent} from './events/events.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProjectService} from './shared/project.service';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent} from './home/home.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        EventsComponent,
        AboutUsComponent,
        ContactUsComponent,
        ProjectsComponent,
        HomeComponent


    ],
    providers: [
        EventService,
        ProjectService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
