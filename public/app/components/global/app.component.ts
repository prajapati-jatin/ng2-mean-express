import { OnInit, AfterViewInit, DoCheck } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, Input } from '@angular/core';

import { UserService } from '../services/user.service';
import { Logger } from '../services/logger.service';

import './rxjs-operators';

@Component({
    selector: 'app',
    templateUrl: '/views/app.html'
})
export class AppComponent implements AfterViewInit, OnInit {
    
    constructor(private userService: UserService, private logger: Logger, private router: Router){}
    
    public authenticated = false;
    
    title = 'SPRT';
    
    authenticated = false;
    
    onLogout(){
        this.userService.logout().then(res => {
            this.router.navigate(['/home']);
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