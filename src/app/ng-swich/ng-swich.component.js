"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var NgSwichComponent = /** @class */ (function () {
    function NgSwichComponent() {
        this.color = "red";
    }
    NgSwichComponent.prototype.onclick = function (color) {
        if (this.color = "red") {
            this.color = color;
        }
        else if (this.color = "green") {
            this.color = color;
        }
    };
    NgSwichComponent.prototype.ngOnInit = function () {
    };
    NgSwichComponent = __decorate([
        core_1.Component({
            selector: 'app-ng-swich',
            templateUrl: './ng-swich.component.html',
            styleUrls: ['./ng-swich.component.css']
        })
    ], NgSwichComponent);
    return NgSwichComponent;
}());
exports.NgSwichComponent = NgSwichComponent;
