/*Наведіть кілька прикладів, коли доречно використовувати в коді конструкцію try...catch.
 * Если каким то чудом, с бекэнда придет не правильные данные, чтоб обезопасить свой код
 * Для лоудера, пока грузятся какие то данные.
 *Обезопасить себя и своей невнимательноти, чтоб отловить ошибку и не сломать приложение.
 */

import { books } from "./dataBooks.js";

const rootElement = document.querySelector("#root");

const createList = document.createElement("ul");
createList.classList.add("list");
rootElement.append(createList);
const createElement = (item) => `<li>
<h2>Имя автора: ${item.author}</h2>
<h2>Название Книги: ${item.name}</h2>
<h2>Цена: ${item.price}</h2>
</li>`;
books.forEach((item) => {
  try {
    if (!!item.author && !!item.name && !!item.price) {
      const list = document.querySelector(".list");
      list.innerHTML += createElement(item);
    }

    switch (false) {
      case !!item.author:
        throw Error(`${item.name} нету Author`);
        break;
      case !!item.name:
        throw Error(
          `У этого автора ${item.author || item.name} нету названия в книге`
        );
        break;
      case !!item.price:
        throw Error(`У книги ${item.name || item.author} не указана цена`);
        break;
    }
  } catch (error) {
    console.log(error);
  }
});
