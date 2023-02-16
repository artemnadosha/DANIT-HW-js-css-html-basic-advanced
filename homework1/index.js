/*Поясніть своїми словами, як ви розумієте, як працює прототипне наслідування в Javascript
    Это то когда дети получать все значения и методы от родителя после чего могут изменять и создавать новые

Для чого потрібно викликати super() у конструкторі класу-нащадка?
    Чтобы унаследовать базовые значения от того у кого мы наследуем

*/


import {dataProgrammer} from "./data.js";
import {Programmer} from "./class/Programmer.js";

const allProgrammer = dataProgrammer.map((item) => {
  return new Programmer(item.name, item.age, item.salary, item.lang);
});

allProgrammer.forEach((programmer) => console.log(programmer));
