export class LikeComponent {

constructor(private likeCount:number, private isSelected:boolean){


}

onclick(){
     this.likeCount+=(this.isSelected)?+1:-1;
     this.isSelected=!this.isSelected;
     console.log( this.likeCount +"is selected"+ this.isSelected );   

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


}
}