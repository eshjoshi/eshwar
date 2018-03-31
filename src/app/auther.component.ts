import { AutherService } from './service/auther.service';
import { Component } from '@angular/core';
@Component({
    selector:'auther-name',
    template:`<h1>{{tittle}}</h1>
    <ul>
    <li *ngFor= "let auther of authers">
    {{auther}}
    </li>
    </ul>
    `
})
export class AutherComponent {
    tittle = "Auther Name List";
    // authers =["sidharth","eahwar","arun"];
     authers;
     constructor(private autherService: AutherService){
         this.authers = autherService.getAuther();
     }

}
