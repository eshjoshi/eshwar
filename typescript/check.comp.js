var CheckCmp = /** @class */ (function () {
    function CheckCmp(checkCount, isChecked) {
        this.checkCount = checkCount;
        this.isChecked = isChecked;
    }
    CheckCmp.prototype.onclick = function () {
        if (this.isChecked) {
            this.checkCount = this.checkCount + 1;
            this.isChecked = false;
            console.log("checkedcount:-" + this.checkCount + "is checked:-" + this.isChecked);
        }
        else {
            this.checkCount = this.checkCount - 1;
            this.isChecked = true;
            console.log("checkedcount:-" + this.checkCount + "is checked:-" + this.isChecked);
        }
    };
    Object.defineProperty(CheckCmp.prototype, "checkCountfun", {
        get: function () {
            return this.checkCount;
        },
        set: function (checkCount) {
            this.checkCount = checkCount;
        },
        enumerable: true,
        configurable: true
    });
    return CheckCmp;
}());
var checkObj = new CheckCmp(20, true);
console.log(checkObj);
checkObj.onclick();
