// interface Place {
// x: number;
// y: string;
// }

// function place(place:Place){
//     console.log(place.x);
// }

// let user = { x: 2, y: "User" };

// let j = place(user);

interface Emp {
    q: any;
    l: any;
}

function empInfo(emp:Emp){
    console.log(emp.q.lastname);
    console.log(emp.l[3]);
    return emp.q.firtname;
}

let info = { 
    q: {
        firtname:"eshwar",
        lastname: "joshi"
    },
    l : [1,2,3,"chaha"]
};

let k =  empInfo(info);

console.log(k);


let a = function(massage){
    console.log(massage);
}

a("hello eshwar");