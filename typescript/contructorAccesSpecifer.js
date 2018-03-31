var ClassTime = /** @class */ (function () {
    function ClassTime(saturdayClass) {
        this.saturdayClass = saturdayClass;
    }
    ClassTime.prototype.setx = function (saturdayClass) {
        this.saturdayClass = saturdayClass;
    };
    ClassTime.prototype.getx = function () {
        return this.saturdayClass;
    };
    return ClassTime;
}());
var ClassTimeObject = new ClassTime();
ClassTimeObject.setx(5);
var time = ClassTimeObject.getx();
console.log(time);
console.log(ClassTimeObject);
