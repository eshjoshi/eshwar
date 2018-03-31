// interface Place {
// x: number;
// y: string;
// }
function empInfo(emp) {
    console.log(emp.q.lastname);
    console.log(emp.l[3]);
    return emp.q.firtname;
}
var info = {
    q: {
        firtname: "eshwar",
        lastname: "joshi"
    },
    l: [1, 2, 3, "chaha"]
};
var k = empInfo(info);
console.log(k);
var a = function (massage) {
    console.log(massage);
};
a("hello eshwar");
