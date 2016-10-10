"use strict";
var router_1 = require('@angular/router');
var events_component_1 = require('./events/events.component');
var about_us_component_1 = require('./about-us/about-us.component');
var contact_us_component_1 = require('./contact-us/contact-us.component');
var projects_component_1 = require('./projects/projects.component');
var home_component_1 = require('./home/home.component');
var appRoutes = [
    {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    },
    {
        path: 'events',
        component: events_component_1.EventsComponent
    },
    {
        path: 'about-us',
        component: about_us_component_1.AboutUsComponent
    },
    {
        path: 'contact-us',
        component: contact_us_component_1.ContactUsComponent
    },
    {
        path: 'projects',
        component: projects_component_1.ProjectsComponent
    },
    {
        path: 'index',
        component: home_component_1.HomeComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map