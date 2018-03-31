class Emp { //class is logical concept not physcial place 
    name:string;
    mobile:number;
    emp(mobile){
        console.log(mobile);
    };
}

let object =  new Emp;   //Emp type of oject  object in physcial place
   object.name = "eshwar";
   let mobile = object.mobile = 8793248082;
   object.emp(mobile);