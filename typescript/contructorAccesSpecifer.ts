class ClassTime{
    constructor(private saturdayClass ?:number){

    }
    setx(saturdayClass ?:number){
        this.saturdayClass  = saturdayClass;
    }
    getx(){
        return this.saturdayClass;
    }

}
let ClassTimeObject= new ClassTime(); 
ClassTimeObject.setx(5);
let time = ClassTimeObject.getx();
console.log(time);
console.log(ClassTimeObject);
