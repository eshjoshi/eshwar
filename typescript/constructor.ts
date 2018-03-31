class Point {
   private _x:number; // private acess specifir
   private _y:number;  //variable class shown for naming variable
   private z: object;

constructor(_x:number,_y:number){ //howw to make paramiter is optional add ?:
this._x = _x;
this._y = _y;

}
display(){
    console.log("value x" +" " +this._x + "  " + "value y" + " " +this._y);
}
set x(x:number){  // set the value of pravite variable private x:number; 
    this._x = x;
}
set y(y:number){
    this._y = y;   // properties acces specifer set Y
}
get x(){        // get value from privite variable private x:number; 
    return this._x;
}
get y(){
    return this._y;
}
}

let pointObject = new Point(1,2);      //optional paramiter
pointObject.x = 10;                    //call setx function pass value as argument
let x = pointObject.x;
pointObject.y = 20;
let y = pointObject.y;

console.log(pointObject);

console.log( "x:" +x + " " +"y:" + y );  // display value
