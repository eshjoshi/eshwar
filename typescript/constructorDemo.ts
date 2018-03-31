// class DemoCont {

//     constructor(private name ?: string, private degination ?: string){

//     }

//     setx(name ?: string){
//         this.name = name;
//     }
//     getx(){
//         return this.name;
//     }
//     sety(degination ?: string){
//         this.degination = degination;
//     }
//     gety(){
//         return this.degination;
//     }


// }
// let demoObject = new DemoCont();
// demoObject.setx("eshwar");
// demoObject.sety("UI Developer");

// let kaykaru = demoObject.getx();
// let bhokat =  demoObject.gety();

// console.log("kay" +kaykaru);
// console.log("tu"+bhokat+ "ahe ka");


class DemoCont {
    constructor(private _name ?: string, private _degination ?: string){

        this._name = _name;
        this._degination =_degination;
    }
    set x(name : string){
        this._name = name;
    }
    get x(){
        return this._name;
    }
    set y(degination : string){
        this._degination = degination;
    }
    get y(){
        return this._degination;
    }
}
let demoObject = new DemoCont();
demoObject.x =  "eshwar";
demoObject.y = "UI Developer";

let kaykaru = demoObject.x;
let bhokat =  demoObject.y;

console.log("kay" +kaykaru);
console.log("tu"+bhokat+ "ahe ka");
