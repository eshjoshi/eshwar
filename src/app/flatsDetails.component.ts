import { Component } from '@angular/core';
import { FlatDetailsService } from './service/flatDetails.service';

@Component({
            selector: 'flat-info',
            templateUrl:'./view/flatDetails.view.html'
})


export class FlatsDetailComponent {

    tittle = "Flats Detail List";
    flatsDetails;
    constructor(private flatDetailsService: FlatDetailsService ){
        this.flatsDetails = flatDetailsService.getFlatDetails();
    }
    colspan = 2;
}