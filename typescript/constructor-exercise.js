var Gender;
(function (Gender) {
    Gender[Gender["male"] = 0] = "male";
    Gender[Gender["female"] = 1] = "female";
})(Gender || (Gender = {}));
;
var Patient = /** @class */ (function () {
    function Patient(nameOfPatient, address, mobile, age, sex) {
        this.nameOfPatient = nameOfPatient;
        this.address = address;
        this.mobile = mobile;
        this.age = age;
        this.sex = sex;
    }
    Patient.prototype.setx = function (nameOfPatient) {
        this.nameOfPatient = nameOfPatient;
    };
    Patient.prototype.getx = function () {
        return this.nameOfPatient;
    };
    Patient.prototype.display = function () {
        console.log("Name" + this.nameOfPatient);
        console.log("Address" + this.address.permanent);
        console.log("Mobile" + this.mobile);
        console.log("Age" + this.age);
        console.log("Sex" + this.sex);
    };
    return Patient;
}());
var obj = { "current": "Pune", "permanent": "Chikhli" };
var patientDetails = new Patient("", obj, 8793248082, 26, Gender.male);
patientDetails.display();
patientDetails.setx("arvind");
var newName = patientDetails.getx();
console.log(newName);
