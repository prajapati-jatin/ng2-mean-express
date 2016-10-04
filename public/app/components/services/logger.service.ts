import { Injectable } from '@angular/core';

@Injectable()
export class Logger{
    logs: any[] = [];    //captures logs for testing
    
    log(message: any){
        this.logs.push(message);
        console.log(message);
    }
    
    logError(error: any){
        this.logs.push(error);
        console.error(error);
    }
}