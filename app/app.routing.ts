import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsComponent }      from './events/events.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProjectsComponent } from './projects/projects.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    },

    {
        path: 'events',
        component: EventsComponent
    },

    {
        path: 'about-us',
        component: AboutUsComponent
    },

    {
        path: 'contact-us',
        component: ContactUsComponent
    },

    {
        path: 'projects',
        component: ProjectsComponent
    },

    {
        path: 'index',
        component: HomeComponent
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
