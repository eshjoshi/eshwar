import { AutherInfoService } from './service/autherInfo.service';
import { Component } from '@angular/core';
@Component({
    selector: 'auther-info',
    template: `<h1 [textContent] = "tittle" ></h1>   
    <h2>{{tittle}}</h2>
    <img [src]="imgUrl"  >
    <div [class.active]="isDisable">{{isDisable}}</div>
    <ul *ngFor='let autherInfo of autherInfos'>
    <li><h1>{{'Showing Auther information about:' + autherInfo.name}}</h1></li>
    <li>Name:- {{autherInfo.name}}</li>
    <li>Publisher:- {{autherInfo.publisher}}</li>
    <li>Date:- {{autherInfo.date}}</li>
    <li>Place:- {{autherInfo.place}}</li>
    </ul>
    `

}) //text content is properties of dom

export class AutherInfoComponent {
    imgUrl = "http://lorempixel.com/400/200/";
    isDisable = true;
    tittle = "Auther Information";  //properties data one way data binding
    autherInfos; //instance variable
    constructor(private autherInfoService: AutherInfoService) {   //dependancies injection

        this.autherInfos = autherInfoService.getAutherinfo();

    }

}