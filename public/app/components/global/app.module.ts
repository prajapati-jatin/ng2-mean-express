import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from '../comps/home.component';
import { LoginComponent } from '../comps/login-form.component';
import { HttpModule, JsonpModule } from '@angular/http';
import { LogoutComponent } from '../comps/logout.component';
import { DashboardComponent } from '../comps/dashboard.component';

import { UserService } from '../services/user.service';
import { Logger } from '../services/logger.service';

import { routing } from './app.routing';

@NgModule({
    imports: [ BrowserModule, FormsModule, routing, HttpModule, JsonpModule ],
    declarations: [ AppComponent, HomeComponent, LoginComponent, LogoutComponent, DashboardComponent ],
    providers: [ UserService, Logger ],
    bootstrap: [ AppComponent ]
})

export class AppModule {
    
}