export class Employee {

    constructor(name, age, salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    get salary() {
        return this._salary;
    }

    set name(name) {
        this._name = name;
    }

    set age(age) {
        this._age = age;
    }

    set salary(salary) {
        this._salary = salary;
    }
}