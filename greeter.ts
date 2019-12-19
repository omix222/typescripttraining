//インターフェース
interface Person {
    firstname: string;
    lastname: string;
}

//クラス
class Greeter {
    private greeting: string;
    //型アノテーション。コンストラクタに文字列以外入れられなくする
    constructor(message: string) {
        this.greeting = message;
    }
    greet(person: Person) {
        return "Hello, " + person.lastname + " " + person.firstname + " " + this.greeting;
    }
}

let greeter = new Greeter("World!");
let user = {firstname:"hiro",lastname:"taka"};

document.body.innerHTML = greeter.greet(user);
