import {Employee} from "./Employee.js";

export class Programmer extends Employee {
    constructor(name, age, salary, lang) {
        super(name, age, salary);
        this.lang = lang;
    }

    get salary() {
        return this._salary * 3;
    }

    get lang() {
        return this._lang;
    }

    set salary(salary) {
        this._salary = salary;
    }

    set lang(lang) {
        this._lang = lang;
    }

}