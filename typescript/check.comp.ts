
class CheckCmp {
    constructor(private checkCount?:number, private isChecked?:boolean) {
        
    }
    onclick(){
        if(this.isChecked){
            this.checkCount = this.checkCount+1;
            this.isChecked = false;
            console.log("checkedcount:-"+this.checkCount+"is checked:-"+this.isChecked);
        }
        else{
            this.checkCount = this.checkCount-1;
            this.isChecked = true;
            console.log("checkedcount:-"+this.checkCount+"is checked:-"+this.isChecked);
        }
    }
    set checkCountfun(checkCount:number){
        this.checkCount = checkCount;
    }
    get checkCountfun(){
        return this.checkCount;
    }

}

let checkObj = new CheckCmp(20,true);
console.log(checkObj);

checkObj.onclick();


