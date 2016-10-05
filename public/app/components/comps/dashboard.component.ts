import { Component } from '@angular/core';
import { CanActivate } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';

@Component({
    templateUrl: '/views/dashboard.html'
})
@CanActivate(() => tokenNotExpired())
export class DashboardComponent {
    constructor(){
        
    }
}