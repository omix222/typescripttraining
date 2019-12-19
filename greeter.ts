//インターフェース
interface Person {
    firstName: string;
    lastName: string;
}
//クラス
class Student {
    fullName: string;
    //コンストラクタ引数にpublicをつけると自動で同じ名前の属性が作られる
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
//クラス
class Greeter {
    private greeting: string;
    //型アノテーション。コンストラクタに文字列以外入れられなくする
    constructor(message: string) {
        this.greeting = message;
    }
    greet(person: Person) {
        return "Hello, " + person.lastName + " " + person.firstName + " " + this.greeting;
    }
}

let greeter = new Greeter("World!");
let user = {firstName:"hiro",lastName:"taka"};

let user2 = new Student("hihi","M","taka");
document.body.innerHTML = greeter.greet(user) + "   " + greeter.greet(user2);