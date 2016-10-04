"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('../comps/home.component');
var login_form_component_1 = require('../comps/login-form.component');
var logout_component_1 = require('../comps/logout.component');
var dashboard_component_1 = require('../comps/dashboard.component');
var appRoutes = [
    {
        path: 'home',
        component: home_component_1.HomeComponent
    },
    {
        path: 'login',
        component: login_form_component_1.LoginComponent
    },
    {
        path: 'logout',
        component: logout_component_1.LogoutComponent
    },
    {
        path: 'admin/dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });
//# sourceMappingURL=app.routing.js.map