import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AfterViewInit, OnInit } from '@angular/core';

import { AppComponent } from '../global/app.component';
import { Login } from '../models/login';
import { UserService } from '../services/user.service';
import { Logger } from '../services/logger.service';

@Component({
    templateUrl: '/views/login.html'
})

export class LoginComponent implements AfterViewInit, OnInit{
    
    constructor(private userService: UserService, private logger: Logger, private route: ActivatedRoute, private router: Router) { }
    
    @Input() isauthenticated = false;
    title = 'Login';
    
    model = new Login('jatin.prajapati@outlook.com', '');
    
    submitted = false;
    
    onSubmit() {
        try{
            this.submitted = true;
            this.userService.authenticate(this.model.username, this.model.password).then((response) => {
                window.token = response;
                //console.log(window.token);
                this.isauthenticated = true;
                this.router.navigate(['/home']);
            }).catch((error) => {
                this.logger.log(error);
            });
        }
        catch(ex){
            console.error(ex);
        }
    }
    
    //TODO: Remove this when done.
    get diagnostic() {
        return JSON.stringify(this.model);
    }
    
    ngAfterViewInit(){
        setTimeout(function(){
            $('[class*="mdl-js-"]').each(function(i, element){
               //console.log(element);
               componentHandler.upgradeElement(element);
           });
        }, 1000);
    }
    
    ngOnInit(){
        try{
            this.userService.getToken().then((response) => {
                if(response !== "undefined" && response !== ''){
                    this.router.navigate(['/home']);
                }
            }).catch((error) => {
                this.logger.logError('Not authenticated');
            });
        }
        catch(ex){
            this.logger.logError(ex);
        }
    }
}