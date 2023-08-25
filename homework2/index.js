/*Наведіть кілька прикладів, коли доречно використовувати в коді конструкцію try...catch.
 * Если каким то чудом, с бекэнда придет не правильные данные, чтоб обезопасить свой код
 * Для лоудера, пока грузятся какие то данные.
 *Обезопасить себя и своей невнимательноти, чтоб отловить ошибку и не сломать приложение.
 */

import { books } from "./dataBooks.js";
import {createElement} from "./createItemElement.js";

const rootElement = document.querySelector("#root");

const createList = document.createElement("ul");
createList.classList.add("list");
rootElement.append(createList);

books.forEach((item) => {
  try {
    if (!!item.author && !!item.name && !!item.price) {
      const list = document.querySelector(".list");
      list.innerHTML += createElement(item);
    }

    ['author','name','price'].forEach((property) => {
      if(!item.hasOwnProperty(property)) {
        throw Error(`У этой колекции нету ${property}`)
      }
    })
  } catch (error) {
    console.log(error);
  }
});
