import { AfterViewInit } from '@angular/core';
import { Component } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: '/views/app.html'
})

export class AppComponent implements AfterViewInit {
    title = 'SPRT';
    ngAfterViewInit(){
        setTimeout(function(){
            $('[class*="mdl-js-"]').each(function(i, element){
               //console.log(element);
               componentHandler.upgradeElement(element);
           });
        }, 1000);
    }
}