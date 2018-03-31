import { LibariesService } from './service/libaries.service';
import { Component } from '@angular/core';
@Component({
    selector:'libires-book',
    template: `<h1> {{tittle}}</h1>
    <ul>
    <li *ngFor= "let libarie of libaries">
    {{libarie}}
    </li>
    </ul>
    `
})

export class LibariesComponent {
    tittle = "Libaries book list";
    libaries;
    constructor(private libariesService ?: LibariesService){
        this.libaries = libariesService.getLibaries();
    }
}
