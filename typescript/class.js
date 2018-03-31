var Emp = /** @class */ (function () {
    function Emp() {
    }
    Emp.prototype.emp = function (mobile) {
        console.log(mobile);
    };
    ;
    return Emp;
}());
var object = new Emp; //Emp type of oject  object in physcial place
object.name = "eshwar";
var mobile = object.mobile = 8793248082;
object.emp(mobile);
