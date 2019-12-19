var Greeter = /** @class */ (function () {
    //型アノテーション。コンストラクタに文字列以外入れられなくする
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function (person) {
        return "Hello, " + person.lastname + " " + person.firstname + " " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("World!");
var user = { firstname: "hiro", lastname: "taka" };
document.body.innerHTML = greeter.greet(user);
