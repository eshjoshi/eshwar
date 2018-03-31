"use strict";
exports.__esModule = true;
var LikeComponent = /** @class */ (function () {
    function LikeComponent(likeCount, isSelected) {
        this.likeCount = likeCount;
        this.isSelected = isSelected;
    }
    LikeComponent.prototype.onclick = function () {
        this.likeCount += (this.isSelected) ? +1 : -1;
        this.isSelected = !this.isSelected;
        console.log(this.likeCount + "is selected" + this.isSelected);
        /*   if(this.isSelected){
               this.likeCount = this.likeCount-1;
               this.isSelected = false;
               console.log( this.likeCount +"is selected"+ this.isSelected );
           }
           else{
               this.likeCount = this.likeCount+1;
               this.isSelected = true;
               console.log( this.likeCount +"is selected"+ this.isSelected );
           }*/
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
