/*Поясніть своїми словами, як ви розумієте, як працює прототипне наслідування в Javascript
    Это то когда дети получать все значения и методы от родителя после чего могут изменять и создавать новые

Для чого потрібно викликати super() у конструкторі класу-нащадка?
    Чтобы унаследовать базовые значения от того у кого мы наследуем

*/

const dataProgrammer = [
  {
    id: 1,
    name: "Artem",
    age: 12,
    salary: 800,
    lang: "JavaScript",
  },
  {
    id: 2,
    name: "Alex",
    age: 13,
    salary: 1600,
    lang: "Python",
  },
  {
    id: 3,
    name: "Egor",
    age: 14,
    salary: 1800,
    lang: "Ruby",
  },
  {
    id: 4,
    name: "Sergey",
    age: 18,
    salary: 1500,
    lang: "Java",
  },
];

class Employee {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
  }

  getName() {
    return this.name;
  }

  getAge() {
    return this.age;
  }

  getSalary() {
    return this.salary;
  }

  setName(name) {
    this.name = name;
  }

  setAge(age) {
    this.age = age;
  }

  setSalary(salary) {
    this.salary = salary;
  }
}

class Programmer extends Employee {
  constructor(name, age, salary, lang) {
    super(name, age, salary);
    this.lang = lang;
  }

  getSalary() {
    return this.salary * 3;
  }

  getLang() {
    return this.lang;
  }

  setLang(lang) {
    this.lang = lang;
  }
}

const allProgrammer = dataProgrammer.map((item) => {
  return new Programmer(item.name, item.age, item.salary, item.lang);
});

allProgrammer.forEach((programmer) => console.log(programmer));
