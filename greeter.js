//クラス
var Student = /** @class */ (function () {
    //コンストラクタ引数にpublicをつけると自動で同じ名前の属性が作られる
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
//クラス
var Greeter = /** @class */ (function () {
    //型アノテーション。コンストラクタに文字列以外入れられなくする
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function (person) {
        return "Hello, " + person.lastName + " " + person.firstName + " " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("World!");
var user = { firstName: "hiro", lastName: "taka" };
var user2 = new Student("hihi", "M", "taka");
document.body.innerHTML = greeter.greet(user) + "   " + greeter.greet(user2);
