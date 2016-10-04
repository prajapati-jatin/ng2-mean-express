import { OnInit, AfterViewInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, Input } from '@angular/core';

import { UserService } from '../services/user.service';
import { Logger } from '../services/logger.service';
import { NotificationService, NotificationMessage } from '../services/notification.service';

import './rxjs-operators';

@Component({
    selector: 'app',
    templateUrl: '/views/app.html',
    providers: [ NotificationService ]
})
export class AppComponent implements AfterViewInit, OnInit {

    public authenticated = false;
    
    constructor(private userService: UserService, private logger: Logger, private router: Router,
    private notificationService: NotificationService){
        this.notificationService.notify$.subscribe(noty => {
            switch(noty.notyType){
                case 'authenticated':
                    this.authenticated = true;
                break;
                case 'logout':
                    this.authenticated = false;
                break;
            }
        });
    }    
    
    title = 'SPRT';
    
    onLogout(){
        this.userService.logout().then(res => {
            window.location.assign('/');
            //this.router.navigate(['/home']);
            //this.notificationService.sendNotification(new NotificationMessage("logout", "", null));
        }).catch(err => {
            this.logger.logError(err);
        });
    }
    
    ngOnInit(){
        try{
            this.userService.getToken().then((response) => {
                if(response !== "undefined" && response !== ''){
                    this.authenticated = true;
                }
            }).catch((error) => {
                
            });
        }
        catch(ex){
            this.logger.logError(ex);
        }
    }
    
    // ngDoCheck(){
    //     try{
    //         console.log('Do check');
    //         this.userService.getToken().then((response) => {
    //             if(response !== "undefined" && response !== ''){
    //                 this.authenticated = true;
    //             }
    //         }).catch((error) => {
                
    //         });
    //     }
    //     catch(ex){
    //         this.logger.logError(ex);
    //     }
    // }
    
    ngAfterViewInit(){
        setTimeout(function(){
            $('[class*="mdl-js-"]').each(function(i, element){
               //console.log(element);
               componentHandler.upgradeElement(element);
           });
        }, 1000);
    }
}